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
    setSearchQuery: (value: string) => void;
    currentPage: number;
    numberOfPages: number;
}

const ListWrapper: React.FunctionComponent<IListWrapper> = ({
    fetchData,
    setSearchQuery,
    list,
    currentPage,
    numberOfPages
}) => {
    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = value => {
        setSearchQuery(value);
        fetchData();
    };

    return (
        <StyledListWrapper>
            <header>
                <InputField
                    placeholder={literals.inputfield.placeholder}
                    handleChange={handleChange}
                />
            </header>
            <List items={list} />
            {numberOfPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    numberOfPages={numberOfPages}
                    handleClick={fetchData}
                />
            )}
        </StyledListWrapper>
    );
};

export default ListWrapper;
