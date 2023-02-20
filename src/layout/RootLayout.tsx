import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import Pagination from "./Pagination";

const RootLayout = () => {
	const { pageId } = useParams();

	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>

			{!pageId && <Pagination />}
		</>
	);
};

export default RootLayout;
