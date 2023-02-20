import styled from "styled-components";

export const PaginationContainer = styled.div``;

export const StyledPagination = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0 10px 0;
	gap: 20px;
	flex: 0 0 90px;
`;

export const PaginationArrow = styled.li`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28.82px;
	height: 30px;
	border-radius: 50%;
	background: #5b5e63;
`;

export const PaginationNumber = styled(PaginationArrow)<{ choosen: boolean }>`
	font-size: 12px;
	line-height: 1.2;
	color: white;
	background-color: ${(props) => (props.choosen ? "#17323a" : "inherit")};

	&:hover {
		color: #fff;
		background: #30484f;
	}

	/* &.choosen {
		/* background: #17323a;
	} */
`;
