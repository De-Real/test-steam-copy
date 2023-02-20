import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";

import steamLogo from "../assets/steam-logo.png";
import HeaderLogo from "../components/Header/HeaderLogo";

const StyledImg = styled.img`
	width: 100px;
	height: 100px;
`;

type errorType = {
	data: string;
	error: string;
	internal: boolean;
	status: number;
	statusText: string;
};

const NotFound = () => {
	const error = useRouteError() as errorType;

	console.log(error);

	let errorReason = "Something went wrong!";

	if (error.status === 404) {
		errorReason = "Page was not found!";
	}

	return (
		<main>
			<HeaderLogo />
			<h2> Whoops!</h2>
			<p> {errorReason} </p>
			<StyledImg src={steamLogo} alt="Error"></StyledImg>
			<Link to="/main"> Back to main </Link>
		</main>
	);
};

export default NotFound;
