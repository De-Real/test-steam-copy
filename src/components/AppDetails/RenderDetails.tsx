import React from "react";
import { DetailedSteamApplicationInterface } from "../../types/fetchDataInterfaces";

import {
	AppDetailsInfo,
	AppDetailsPrice,
	AppDetailsImg,
	AppDetailsTags,
	AppDetailsTitle,
} from "../styles/AppDetails.styled";

type RenderDetailsProps = {
	foundItem: DetailedSteamApplicationInterface;
};

const RenderDetails = ({ foundItem }: RenderDetailsProps) => {
	return (
		<>
			<div>
				<AppDetailsImg>
					<img src={foundItem?.imgUrl} alt="Game"></img>
				</AppDetailsImg>
				<AppDetailsInfo>
					<AppDetailsTitle>{foundItem?.title}</AppDetailsTitle>
					<AppDetailsPrice>{foundItem?.price}</AppDetailsPrice>
					<p>{foundItem?.released}</p>
				</AppDetailsInfo>
			</div>

			<p>{foundItem?.description}</p>
			<AppDetailsTags>
				{foundItem?.tags?.map((tag) => {
					return (
						<span key={Math.random()}>
							<h3>
								<a href={tag.url}>{tag.name}</a>
							</h3>
						</span>
					);
				})}
			</AppDetailsTags>
		</>
	);
};

export default RenderDetails;
