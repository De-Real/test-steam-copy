import React from "react";
import { Link } from "react-router-dom";

import websiteLogo from "../../assets/logo.svg";
import { StyledHeaderLogo } from "../styles/HeaderLogo";

const HeaderLogo = () => {
	return (
		<Link to="/main/pages/1">
			<StyledHeaderLogo>
				<img src={websiteLogo} alt="Website logo" />
			</StyledHeaderLogo>
		</Link>
	);
};

export default HeaderLogo;
