import styled from "styled-components";

export const StyledHeaderButton = styled.button<{ active: boolean }>`
	background: ${({ active }) => (active ? "#767474" : "#837f7f")};
	color: white;
	min-width: 50px;

	&:first-child {
		border-radius: 4px 0 0 4px;
	}

	&:not(:last-child) {
		padding: 5px 2px 5px 2px;
		border-right: 1px solid whitesmoke;
	}
	&:last-child {
		padding: 5px 2px 5px 2px;
		border-radius: 0 4px 4px 0;
	}
`;

export const StyledHeaderButtonGroup = styled.div`
	padding: 5px 11px;
	background: #837f7f;
	border-radius: 10px;
	display: flex;

	@media (max-width: 768px) {
		order: 2;
		padding: 10px 12px;
	}
`;
