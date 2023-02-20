import styled from "styled-components";

export const StyledAppItem = styled.li`
	list-style: none;
	height: 100%;
	background: #17323a;
	border-radius: 10px;
	position: relative;
	transition: transform 0.15s ease 0s;
	cursor: pointer;

	&:hover {
		transform: scale(1.05, 1.05);
	}
`;

export const AppItemPicture = styled.div`
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	img {
		background-color: transparent;
		width: 100%;
		height: auto;
	}
`;

export const AppItemInfo = styled.div`
	padding: 7px 11px;
	cursor: pointer;

	/* display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
	 */
	a {
		color: white;
	}
`;

export const AppItemTitle = styled.p`
	font-size: 18px;
	line-height: 1.2;
	margin-bottom: 6px;
`;

export const AppItemDate = styled.p`
	font-size: 15px;
	line-height: 1.2;
	margin-bottom: 5px;
	/* flex: 1 1 auto; */
`;

export const AppItemControl = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const AppItemPrice = styled.p`
	font-size: 14px;
	line-height: 1.2;
`;

export const AppItemLike = styled.p`
	width: 25px;
	height: 25px;
	transition: transform 0.1s ease 0s;

	img {
		width: 100%;
		height: 100%;
	}

	&:hover {
		transform: scale(1.25);
	}
`;

export const AppItemPlay = styled.div`
	position: absolute;
	top: 76px;
	right: 17px;
	cursor: pointer;
	transition: transform 0.25s ease 0s;
	&:hover {
		transform: scale(1.1);
	}
`;
