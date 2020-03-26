import styled from "styled-components";
import { colors } from "../../styles";

interface IStyledMenu {
    selected?: boolean;
}

export const StyledMenu = styled.div<IStyledMenu>`
    list-style-type: none;

    li {
        cursor: pointer;
    }

    li a {
        position: relative;
        display: block;
        padding: 1rem;
        font-size: 17px;
        font-weight: 300;
        color: #202121;
        cursor: pointer;
        background: #f4f7f6;
        border-bottom: 1px solid #e6eaea;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    li a:hover {
        background-color: ${colors.white};
        -webkit-transition: background 0.3s ease-in-out;
        transition: background 0.3s ease-in-out;
    }

    ${({ selected }) =>
        selected &&
        `
        li {
            background-color: rgb(87, 87, 206);
            color: ${colors.white};
        }

        li a {
            color: ${colors.teal};
        }
        
        `}
`;
