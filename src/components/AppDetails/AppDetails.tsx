import React from "react";

import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { DetailedSteamApplicationInterface } from "../../types/fetchDataInterfaces";
import { AppDetailsBtn, StyledAppDetails } from "../styles/AppDetails.styled";
import RenderDetails from "./RenderDetails";
import RenderNotFound from "./RenderNotFound";

const AppDetails = () => {
	const detailedItem = useLoaderData() as DetailedSteamApplicationInterface;

	console.log(detailedItem);

	const { pageId } = useParams();

	const isValid = pageId?.split("-")[0] !== "none";

	const navigate = useNavigate();
	const gotoBackHandler = () => {
		navigate(-4);
	};

	return (
		<StyledAppDetails>
			<AppDetailsBtn onClick={gotoBackHandler}> Go back </AppDetailsBtn>
			{!isValid && <RenderNotFound />}
			{isValid && <RenderDetails foundItem={detailedItem} />}
		</StyledAppDetails>
	);
};

export default AppDetails;
