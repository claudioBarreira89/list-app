import React from "react";
import { StyledWrapper } from "./styles";
import NavBar from "../../containers/NavBarContainer";
import ListWrapper from "../../containers/ListWrapperContainer";

const AppWrapper = () => {
    return (
        <StyledWrapper>
            <NavBar />
            <ListWrapper />
        </StyledWrapper>
    );
};

export default AppWrapper;
