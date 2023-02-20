import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		document.title = "Steam copy app";
	}, []);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
