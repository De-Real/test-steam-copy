import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { json } from "stream/consumers";
import { options } from "../api/options";
import MainApps from "../components/MainApps/MainApps";
import ErrorWrapper from "../components/UI/ErrorWrapper";
import Loading from "../components/UI/Loading";
import useFetch from "../hooks/useFetch";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import { SteamApplicationInterface } from "../types/fetchDataInterfaces";
import LinearLoading from "../components/UI/LinearLoading";

const Main = () => {
	const { page } = useParams();
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("search") || "Counter";

	const { data, error } = useFetch<SteamApplicationInterface[]>(
		`https://steam2.p.rapidapi.com/search/${searchParam}/page/${page || 1}`,
		options
	);

	// const [error, setError] = useState<string>();
	// const [data, setData] = useState<SteamApplicationInterface[]>([]);

	// console.log(data, error);

	// useEffect(() => {
	// 	const fetchApps = async () => {
	// 		const response = await fetch(
	// 			`https://steam2.p.rapidapi.com/search/Counter/page/1`,
	// 			options
	// 		);
	// 		if (!response.ok) {
	// 			setError(response.statusText);
	// 			// throw new Error("Error");
	// 		}

	// 		const results = await response.json();
	// 		setData(results);
	// 	};

	// 	fetchApps();
	// }, [searchParam, page]);

	if (error) {
		if (error.message === "No data fetched.") {
			return (
				<ErrorWrapper
					error={{ title: "Error occured!", message: "No data found." }}
				/>
			);
		} else {
			throw new Error(error.message);
		}
	}

	// if (error) {
	// 	throw new Error(error);
	// }

	if (!data || (data.length === 0 && !error)) {
		return <Loading />;
	}

	return (
		<>
			<LinearLoading />
			<MainApps apps={data} />
		</>
	);
};

export default Main;
