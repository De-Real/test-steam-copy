export const getNewId = () => {
	const identifier = Math.random().toFixed(10).toString();
	return `none-${identifier.slice(5)}`;
};
