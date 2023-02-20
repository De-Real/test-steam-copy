import styled from "styled-components";

export const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 37px;
	gap: 12px;
	@media (max-width: 768px) {
		flex-wrap: wrap;
		gap: 7px;
		min-height: 155px;
	}
`;
