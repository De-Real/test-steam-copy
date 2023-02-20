import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./GlobalStyles";
import "./index.css";
import { Provider } from "react-redux/es/exports";
import { store } from "./store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<GlobalStyle />
		<App />
	</Provider>
);
