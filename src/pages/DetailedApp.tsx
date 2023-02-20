import axios from "axios";
import React from "react";
import { LoaderFunctionArgs } from "react-router-dom";
import { options } from "../api/options";
import AppDetails from "../components/AppDetails/AppDetails";

const DetailedApp = () => {
	return <AppDetails></AppDetails>;
};

export default DetailedApp;

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
	const { pageId } = params;

	const response = await fetch(
		`https://steam2.p.rapidapi.com/appDetail/${pageId}`,
		options
	);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response;
};
