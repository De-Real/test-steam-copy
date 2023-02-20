import styled from "styled-components";
export const StyledForm = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #837f7f;
	border-radius: 10px;
	flex: 0 1 602px;
	width: 200px;

	& input {
		background-color: transparent;
		width: 100%;
		height: 100%;
		padding: 10px 0 10px 16px;
		color: white;
	}

	& input::placeholder {
		font-size: 12px;
		line-height: 1.25;
		opacity: 1;
		color: white;
	}

	& label {
		& button {
			padding-right: 8px;
			background-color: transparent;
		}
	}

	@media (max-width: 768px) {
		order: 3;
		flex: 1 1 100%;
	}
`;
