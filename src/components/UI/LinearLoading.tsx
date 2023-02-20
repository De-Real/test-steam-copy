import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styled from "styled-components";
import { useNavigation } from "react-router-dom";

const StyledBox = styled.div`
	color: #837f7f;
	padding-bottom: 15px;
	position: sticky;
	top: -35px;
	left: 0;
	z-index: 15;

	@media (max-width: 768px) {
		padding: 15px 0;
		top: -50px;
	}

	& > p {
		width: 100%;
		height: 4px;
		z-index: 1000;
	}
`;

function LinearLoading() {
	const navigation = useNavigation();

	const isLoading = navigation.state === "loading";

	return (
		<StyledBox>
			{!isLoading && <p></p>}
			{isLoading && <LinearProgress color="inherit" />}
		</StyledBox>
	);
}

export default LinearLoading;
