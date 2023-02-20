import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { StyledHeaderDroppable } from "../styles/HeaderDroppable";

type SelectType = "price" | "publish-date";
const QUERY_PARAMETER = "parameter";

const HeaderDroppable = () => {
	const [value, setValue] = useState<SelectType>("price");
	const [searchParams, setSearchParams] = useSearchParams();

	const paramValue = searchParams.get(QUERY_PARAMETER);
	const { pageId } = useParams();

	//Check whether value while mounting is correct, if not delete query parameter from url
	useEffect(() => {
		const isValid = paramValue === "price" || paramValue === "publish-date";

		if (isValid) {
			setValue(paramValue);
		} else {
			searchParams.delete(QUERY_PARAMETER);
			setSearchParams(searchParams);
		}
	}, [paramValue, searchParams, setSearchParams]);

	const valueChange = (event: React.FormEvent<HTMLSelectElement>) => {
		const selectValue = event.currentTarget.value as SelectType;
		setValue(selectValue);

		if (pageId) return;

		if (!searchParams.has(QUERY_PARAMETER)) {
			searchParams.append(QUERY_PARAMETER, selectValue);
		} else {
			searchParams.set(QUERY_PARAMETER, selectValue);
		}

		setSearchParams(searchParams);
	};

	return (
		<StyledHeaderDroppable>
			<select onChange={valueChange} value={value}>
				<option value="price">Price</option>
				<option value="publish-date">Publish date</option>
			</select>
		</StyledHeaderDroppable>
	);
};

export default HeaderDroppable;
