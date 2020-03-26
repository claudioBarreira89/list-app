import styled from "styled-components";
import { colors } from "../../styles";

interface IStyledPagination {
    active?: boolean;
}

export const StyledListWrapper = styled.section`
    flex: 1;
    order: 2;
    text-align: left;

    header {
        display: flex;
        text-align: center;
    }
`;

export const StyledItem = styled.div`
    position: relative;
    width: 100%;
    -webkit-transition: background 0.3s ease-in-out;
    transition: background 0.3s ease-in-out;
    box-shadow: 0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed;

    .box-info:hover {
        background-color: rgba(244, 247, 246, 0.3);
    }

    .box-info {
        transition: all 0.3s ease-in-out;
        padding: 1.5rem;
        flex: 1;
        position: relative;
        clear: both;
        background-color: ${colors.white};
        margin-bottom: 1.5rem;
        cursor: pointer;
    }

    .box-info--content {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    .box-info--footer {
        display: flex;
    }

    .box-info--footer ul {
        display: inline-flex;
    }

    .box-info--footer li {
        display: inline-flex;
        align-items: baseline;
        padding: 0 1rem 0 0;
    }

    .box-info--footer li span {
        color: ${colors.grayDark};
    }

    .tags {
        color: ${colors.teal};
    }
`;

export const StyledPagination = styled.ul<IStyledPagination>`
    text-align: center;
    order: 3;
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding-left: 0;
    margin-bottom: 0;
    justify-content: center;

    li {
        margin-right: 0.25rem;
    }

    li:last-child {
        margin-right: 0;
    }

    li a {
        transition: all 0.3s ease-in-out;
        color: ${colors.grayDark};
        padding: 0.375rem 0.4375rem;
        text-decoration: none;
        cursor: pointer;
    }

    li a:hover {
        background: ${colors.teal};
        color: ${colors.white};
    }

    li a:focus {
        box-shadow: inset 0 0 0 2px ${colors.teal};
    }

    li a:active {
        background: ${colors.grayDark};
        color: ${colors.white};
    }

    .active a {
        background: ${colors.teal};
        color: ${colors.white};
        pointer-events: none;
    }
`;
