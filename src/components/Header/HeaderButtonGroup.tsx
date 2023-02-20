import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getAllSearchParams } from "../../util/getAllSearchParams";
import {
	StyledHeaderButtonGroup,
	StyledHeaderButton,
} from "../styles/HeaderButtonGroup.styled";

const QUERY_PARAMETER = "priority";

const HeaderButtonGroup = () => {
	const [isLiked, setIsLiked] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const param = searchParams.get(QUERY_PARAMETER);
	const { pageId } = useParams();

	useEffect(() => {
		const isValid = param === "like-list" || param === "searching";

		if (isValid) {
			setIsLiked(param === "like-list");
		} else {
			searchParams.delete(QUERY_PARAMETER);
			setSearchParams(searchParams);
		}
	}, [param, searchParams, setSearchParams]);

	const changeParameter = (
		_event: React.MouseEvent<HTMLButtonElement>,
		likedList: boolean = false
	) => {
		if (isLiked === likedList) return;

		setIsLiked(likedList);

		if (pageId) return;

		const parameterValue = likedList ? "like-list" : "searching";

		if (!searchParams.has(QUERY_PARAMETER)) {
			searchParams.append(QUERY_PARAMETER, parameterValue);
		} else {
			searchParams.set(QUERY_PARAMETER, parameterValue);
		}

		setSearchParams(searchParams);
	};

	return (
		<StyledHeaderButtonGroup>
			<StyledHeaderButton active={!isLiked} onClick={changeParameter}>
				Search
			</StyledHeaderButton>
			<StyledHeaderButton
				active={isLiked}
				onClick={(event) => changeParameter(event, true)}
			>
				Like list
			</StyledHeaderButton>
		</StyledHeaderButtonGroup>
	);
};

export default HeaderButtonGroup;
