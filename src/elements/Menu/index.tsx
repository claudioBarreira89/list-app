import React from "react";
import { StyledMenu } from "./styles";

interface IMenu {
    items: String[];
}

const Menu: React.FunctionComponent<IMenu> = ({ items }) => {
    return (
        <StyledMenu>
            {items.map((item, i) => (
                <li key={i}>
                    <a>{item}</a>
                </li>
            ))}
        </StyledMenu>
    );
};

export default Menu;
