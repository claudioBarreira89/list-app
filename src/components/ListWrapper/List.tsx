import React from "react";
import { ListItem } from "./LisItem";
import { IDataItem } from "../../store/types";

interface IList {
    items: IDataItem[];
}

export const List: React.FunctionComponent<IList> = ({ items }) => {
    return (
        <ul>
            {items && items.map(item => <ListItem key={item.id} item={item} />)}
        </ul>
    );
};
