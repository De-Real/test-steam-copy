import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import orderSelectionIcon from "../../assets/order-selection.svg";

import {
	StyledHeaderToggle,
	StyledDroppableBlock,
} from "../styles/HeaderToggle.styled";

type SortValues = "bigger-to-lower" | "lower-to-bigger";
const QUERY_PARAMETER = "sort";

const HeaderToggle = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const param = searchParams.get(QUERY_PARAMETER);
	const { pageId } = useParams();

	useEffect(() => {
		const isValid = param === "bigger-to-lower" || param === "lower-to-bigger";

		if (!isValid) {
			searchParams.delete(QUERY_PARAMETER);
			setSearchParams(searchParams);
		}
	}, [param, searchParams, setSearchParams]);

	// Open / Close on backdrop click control
	useEffect(() => {
		const changeStatus = () => {
			if (isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener("click", changeStatus);

		return () => {
			window.removeEventListener("click", changeStatus);
		};
	}, [isOpen]);

	const setFilterParameter = (par: SortValues) => {
		if (searchParams.get(QUERY_PARAMETER) === par) return;

		if (pageId) return;

		if (!searchParams.has(QUERY_PARAMETER)) {
			searchParams.append(QUERY_PARAMETER, par);
		} else {
			searchParams.set(QUERY_PARAMETER, par);
		}
		setSearchParams(searchParams);
	};

	const manageOpening = (event: React.FormEvent<HTMLParagraphElement>) => {
		setIsOpen((curState) => !curState);

		//To give possibility to user open droppable list
		//because eventListener above will close it immediately
		event.nativeEvent.stopImmediatePropagation();
	};

	return (
		<StyledHeaderToggle onClick={manageOpening}>
			<img src={orderSelectionIcon} alt="Droppable icon" />
			<StyledDroppableBlock isOpen={isOpen}>
				<p onClick={setFilterParameter.bind(null, "lower-to-bigger")}>
					Lower to bigger
				</p>
				<p onClick={setFilterParameter.bind(null, "bigger-to-lower")}>
					Bigger to lower
				</p>
			</StyledDroppableBlock>
		</StyledHeaderToggle>
	);
};

export default HeaderToggle;
