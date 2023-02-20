import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
	return (
		<Box sx={{ textAlign: "center", paddingTop: "25px" }}>
			<CircularProgress sx={{ color: "#837f7f" }} size={180} />
		</Box>
	);
};

export default Loading;
