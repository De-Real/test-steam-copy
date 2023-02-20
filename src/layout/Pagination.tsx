import React, { useEffect, useState, useCallback } from "react";
import leftArrowIcon from "../assets/icon-pagination-arrow-left.svg";
import rightArrowIcon from "../assets/icon-pagination-arrow-right.svg";
import { useNavigate, useParams } from "react-router-dom";
import {
	PaginationArrow,
	PaginationNumber,
	StyledPagination,
} from "./styles/Pagination.styled";

const Pagination = () => {
	const { page } = useParams();

	const [currentPage, setCurrentPage] = useState(0);
	const [currentSlice, setCurrentSlice] = useState(0);
	const [isForced, setIsForced] = useState(true);

	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (currentPage.toString() !== page && page) {
	// 		paginate(+page);
	// 		setCurrentSlice(+page);
	// 	}
	// }, [page]);

	const paginate = useCallback((pageNumber: number) => {
		const searchParams = window.location.href.split("?")[1];
		let url = `/main/pages/${pageNumber}`;
		if (searchParams) {
			url += `?${searchParams}`;
		}

		setCurrentPage(currentSlice + 1);

		navigate(url);
		//We skip here deps warning because 'navigate' will cause updates and bugs
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const pageNumbers: number[] = [];

	for (let i = 1; i <= 20; i++) {
		pageNumbers.push(i);
	}

	useEffect(() => {
		if (!page) {
			return;
		}

		if (+page > pageNumbers.length) {
			setCurrentSlice(0);
			paginate(1);
		} else if (isForced) {
			if (+page + 2 >= pageNumbers.length) {
				setCurrentSlice(+page - 2);
			} else {
				setCurrentSlice(+page - 1);
				setIsForced(false);
			}
		}
	}, [page, isForced, pageNumbers?.length, paginate]);

	useEffect(() => {
		if (!isForced) {
			paginate(currentSlice + 1);
			setIsForced(false);
		}
	}, [currentSlice, paginate, isForced]);

	const previousPage = () => {
		setCurrentSlice((curState) => {
			const min = curState - 3;
			return min < 0 ? 0 : min;
		});
	};

	const nextPage = () => {
		setCurrentSlice((curState) => {
			if (pageNumbers.length <= 3) {
				return curState;
			}
			const min = curState + 3;
			const maxArrayLenght = pageNumbers.length - 3;
			return min > maxArrayLenght ? maxArrayLenght : min;
		});
	};

	const slicedPageNumbers = pageNumbers.slice(currentSlice, currentSlice + 3);

	return (
		<div className="pagination-container">
			<StyledPagination>
				<PaginationArrow onClick={previousPage}>
					<img src={leftArrowIcon} alt="Left arrow"></img>
				</PaginationArrow>

				{slicedPageNumbers.map((number) => {
					const isChoosen = Number(page) === number ? true : false;
					return (
						<PaginationNumber
							key={number}
							onClick={() => paginate(number)}
							choosen={isChoosen}
						>
							{number}
						</PaginationNumber>
					);
				})}

				<PaginationArrow onClick={nextPage}>
					<img src={rightArrowIcon} alt="Right arrow" />
				</PaginationArrow>
			</StyledPagination>
		</div>
	);
};

export default React.memo(Pagination);
