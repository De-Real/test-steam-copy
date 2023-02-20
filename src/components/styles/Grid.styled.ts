import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledGrid = styled(Grid)`
	padding: 0 50px;
	position: relative;
	z-index: 1;
	
	@media (max-width: 980px) {
		padding: 0 25px;
	}
	@media (max-width: 760px) {
		padding: 0 15px;
	}
	@media (max-width: 420px) {
		padding: 0;
	}
`;
