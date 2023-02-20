import styled from "styled-components";

export const StyledHeaderDroppable = styled.div`
	flex: 0 0 189px;
	& select {
		font-size: 14px;
		line-height: 1.2;
		background: #837f7f;
		border-radius: 10px;
		padding: 9px 8px 9px 18px;
		color: white;
		width: 100%;
		& option {
			color: white;
		}
	}

	@media (max-width: 1024px) {
		flex: 0 0 140px;
	}
	@media (max-width: 768px) {
		order: 4;
		flex: 1 1 auto;
	}
`;
