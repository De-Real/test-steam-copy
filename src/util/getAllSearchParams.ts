export const getAllSearchParams = (searchParams: URLSearchParams) => {
	const params: [string, string][] = [];

	searchParams.forEach((value, key) => {
		params.push([key, value]);
	});

	return Object.fromEntries(params);
};
