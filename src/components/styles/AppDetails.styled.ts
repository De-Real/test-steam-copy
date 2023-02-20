import styled from "styled-components";
export const StyledAppDetails = styled.section`
	padding: 15px 10px 10px 10px;
	

	@media (max-width: 420px) {
		padding: 0;
	}

	& > p {
		margin-bottom: 15px;
	}

	@media (max-width: 560px) {
		&:first-child {
			flex-direction: column;
		}
	}
`;

export const AppDetailsBtn = styled.button`
	padding: 5px 10px;
	margin-bottom: 15px;
	font-size: 20px;
	border-radius: 5px;
	background-color: #837f7f;
	color: white;

	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #ccc;
		color: #837f7f;
	}
`;

export const AppDetailsImg = styled.div`
	overflow: hidden;
	border-radius: 10px;
	& img {
		height: 100%;
		width: 100%;
	}
`;

export const AppDetailsInfo = styled.div`
	padding-top: 10px;
	font-size: 20px;
	line-height: 1.2;
	p {
		margin-bottom: 10px;
	}
`;

export const AppDetailsTitle = styled.p`
	/* font-size: 20px;
	line-height: 1.2;
	margin-bottom: 10px; */
`;

export const AppDetailsPrice = styled.p`
	/* font-size: 20px;
	margin-bottom: 10px; */
`;

export const AppDetailsReleased = styled.p`
	/* margin-bottom: 10px; */
`;

export const AppDetailsTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	& span {
		padding: 4px;
	}
`;
