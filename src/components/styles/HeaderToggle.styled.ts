import styled from "styled-components";

export const StyledDroppableBlock = styled.div<{ isOpen: boolean }>`
	content: "R";
	display: ${({ isOpen }) => (isOpen ? "block" : "none")};
	position: absolute;
	top: 40px;
	left: -53.5px;
	text-align: center;
	z-index: 5;
	width: 144px;
	height: 53px;
	background: #837f7f;
	border-radius: 10px;
	font-size: 14px;
	line-height: 1.2;
	padding: 6px 12px;
	@media (max-width: 768px) {
		left: -107px;
	}
`;

export const StyledHeaderToggle = styled.div`
	position: relative;
	cursor: pointer;
	@media (max-width: 768px) {
		order: 5;
	}
`;

/* {(isOpen) => isOpen && css``} */
