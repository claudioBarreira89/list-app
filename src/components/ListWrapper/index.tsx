import React, { useEffect } from "react";
import { List } from "./List";
import { Pagination } from "./Pagination";
import InputField from "../../elements/InputField";
import literals from "../../literals";
import { StyledListWrapper } from "./styles";
import { IDataItem } from "../../store/types";

interface IListWrapper {
    list: IDataItem[];
    fetchData: (page?: number) => void;
    currentPage: number;
    numberOfPages: number;
}

const ListWrapper: React.FunctionComponent<IListWrapper> = ({
    fetchData,
    list,
    currentPage,
    numberOfPages
}) => {
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <StyledListWrapper>
            <header>
                <InputField placeholder={literals.inputfield.placeholder} />
            </header>
            <List items={list} />
            <Pagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                handleClick={fetchData}
            />
        </StyledListWrapper>
    );
};

export default ListWrapper;
