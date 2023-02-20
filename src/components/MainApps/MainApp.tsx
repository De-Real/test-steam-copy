import { Grid } from "@mui/material";
import { SteamApplicationInterface } from "../../types/fetchDataInterfaces";
import {
	AppItemInfo,
	AppItemPicture,
	AppItemTitle,
	AppItemDate,
	AppItemPrice,
	AppItemPlay,
	AppItemControl,
	StyledAppItem,
	AppItemLike,
} from "../styles/MainApp.styled";

import playButton from "../../assets/play-button.svg";
import iconLiked from "../../assets/icon-liked.svg";
import iconUnliked from "../../assets/icon-unliked.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
	addLikedApp,
	removeLikedApp,
	selectLikeList,
} from "../../store/likeListSlice";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { getNewId } from "../../util/getNewId";

const formatPrice = (price: string) => {
	const parsedPrice = parseFloat(price.replace(",", "."));
	if (isNaN(parsedPrice)) {
		return price || "Unprovided price";
	}
	return parsedPrice + "€";
};

const MainApp = ({ app }: { app: SteamApplicationInterface }) => {
	const { imgUrl, title, released, price, url, appId } = app;

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const likeList = useAppSelector(selectLikeList);

	let isLiked = false;

	if (likeList.includes(appId)) {
		isLiked = true;
	}

	const { state } = useNavigation();

	const setLikeStatus = (event: React.FormEvent<HTMLElement>) => {
		event.stopPropagation();
		if (isLiked) {
			dispatch(removeLikedApp(appId));
			return;
		}
		dispatch(addLikedApp(appId));
	};

	const goToDetailedApp = (event: React.FormEvent<HTMLElement>) => {
		if (state === "loading") {
			return;
		}
		navigate(`detailed/${appId || getNewId()}`);
	};

	const navigateSteamGame = (event: React.FormEvent<HTMLElement>) => {
		event.stopPropagation();
		window.location.href = url;
	};

	return (
		<>
			<Grid lg={3} md={4} sm={6} xs={12} item>
				<StyledAppItem onClick={goToDetailedApp}>
					<AppItemPicture>
						<img src={imgUrl} alt={title} />
					</AppItemPicture>
					<AppItemInfo>
						<AppItemTitle>
							{title || "Unprovided title of the app"}
						</AppItemTitle>
						<AppItemDate>
							{released || "Release date was not provided"}
						</AppItemDate>
						<AppItemControl>
							<AppItemPrice>{formatPrice(price.trim() || "")}</AppItemPrice>
							<AppItemLike onClick={setLikeStatus}>
								<img
									src={isLiked ? iconLiked : iconUnliked}
									alt={`${isLiked ? "Unliked" : "Unliked"} icon`}
								/>
							</AppItemLike>
						</AppItemControl>
					</AppItemInfo>
					{isLiked && (
						<AppItemPlay onClick={navigateSteamGame}>
							<img src={playButton} alt="Play game"></img>
						</AppItemPlay>
					)}
				</StyledAppItem>
			</Grid>
		</>
	);
};

export default MainApp;
