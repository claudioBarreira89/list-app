import React from "react";
import { StyledPagination } from "./styles";

interface IPagination {
    currentPage: number;
    numberOfPages: number;
    handleClick: (page) => void;
}

export const Pagination: React.FunctionComponent<IPagination> = ({
    currentPage,
    numberOfPages,
    handleClick
}) => {
    const pages = [...Array(numberOfPages)];
    const validPrevPage = !!(currentPage - 1);
    const validNextPage = currentPage + 1 <= numberOfPages;

    return (
        <StyledPagination>
            <li onClick={() => validPrevPage && handleClick(currentPage - 1)}>
                <a>&lt;</a>
            </li>
            {pages.map((el, i) => (
                <li
                    key={i}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => handleClick(i + 1)}
                >
                    <a>{i + 1}</a>
                </li>
            ))}
            <li onClick={() => validNextPage && handleClick(currentPage + 1)}>
                <a>&gt;</a>
            </li>
        </StyledPagination>
    );
};
