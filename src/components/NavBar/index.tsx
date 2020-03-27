import React from "react";
import { StyledNavBarWrapper } from "./styles";
import Menu from "../../elements/Menu";
import literals from "../../literals";

interface INavBar {
    category: string;
    setCategory: (category: string) => void;
    fetchData: () => void;
}

const NavBar: React.FunctionComponent<INavBar> = ({
    category,
    setCategory,
    fetchData
}) => {
    const handleClick = (clickedCategory: string) => {
        setCategory(clickedCategory === category ? "" : clickedCategory);
        fetchData();
    };

    return (
        <StyledNavBarWrapper>
            <h2>{literals.categories.title}</h2>
            <Menu
                items={literals.categories.data}
                selected={category}
                handleClick={handleClick}
            />
        </StyledNavBarWrapper>
    );
};
export default NavBar;
