import { SteamApplicationInterface } from "../types/fetchDataInterfaces";

type sortFilterType = "bigger-to-lower" | "lower-to-bigger";
type parameterFilterType = "price" | "publish-date";

type filterObjType = {
	sort: sortFilterType;
	parameter: parameterFilterType;
};

const sortFn = (par: sortFilterType, num1: number, num2: number) => {
	const isBiggerToLower = par === "bigger-to-lower";

	if (isNaN(num1)) {
		return isBiggerToLower ? 1 : -1;
	}

	if (isNaN(num2)) {
		return isBiggerToLower ? -1 : 1;
	}

	const numDifference = num2 - num1;

	return isBiggerToLower ? numDifference : -numDifference;
};

export const filterApps = (appsArray: SteamApplicationInterface[]) => {
	const searchParams = new URL(window.location.href).searchParams;

	const filterParameters: filterObjType = {
		sort: "bigger-to-lower",
		parameter: "price",
	};

	if (searchParams.has("sort")) {
		const sortParameter = searchParams.get("sort");

		if (
			sortParameter === "bigger-to-lower" ||
			sortParameter === "lower-to-bigger"
		) {
			filterParameters.sort = sortParameter;
		} else {
			filterParameters.sort = "bigger-to-lower"; //Value by default
		}
	}

	if (searchParams.has("parameter")) {
		const parameter = searchParams.get("parameter");

		if (parameter === "price" || parameter === "publish-date") {
			filterParameters.parameter = parameter;
		} else {
			filterParameters.parameter = "price"; //Value by default
		}
	}

	if (filterParameters.parameter === "price") {
		return appsArray.sort((a, b) => {
			const priceOne = parseFloat(a.price || "");
			const priceTwo = parseFloat(b.price || "");

			return sortFn(filterParameters.sort, priceOne, priceTwo);
		});
	} else {
		return appsArray.sort((a, b) => {
			const dateOne = Date.parse(a.released);
			const dateTwo = Date.parse(b.released);
			return sortFn(filterParameters.sort, dateOne, dateTwo);
		});
	}
};
