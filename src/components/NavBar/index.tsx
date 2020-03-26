import React from "react";
import { StyledNavBarWrapper } from "./styles";
import Menu from "../../elements/Menu";
import literals from "../../literals";

const NavBar = () => {
    return (
        <StyledNavBarWrapper>
            <h2>{literals.categories.title}</h2>
            <Menu items={literals.categories.data} />
        </StyledNavBarWrapper>
    );
};

export default NavBar;
