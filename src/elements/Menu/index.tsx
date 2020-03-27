import React from "react";
import { StyledMenu } from "./styles";

interface IMenu {
    items: String[];
    selected?: string;
    handleClick: (item) => void;
}

const Menu: React.FunctionComponent<IMenu> = ({
    items,
    selected,
    handleClick
}) => {
    return (
        <StyledMenu>
            {items.map((item, i) => (
                <li
                    key={i}
                    className={selected == item ? "selected" : ""}
                    onClick={() => handleClick(item)}
                >
                    <a>{item}</a>
                </li>
            ))}
        </StyledMenu>
    );
};

export default Menu;
