import React from "react";
import { StyledItem } from "./styles";
import { IDataItem, ISubscriptions } from "../../store/types";
import literals from "../../literals";

interface IListItem {
    item: IDataItem;
}

export const ListItem: React.FunctionComponent<IListItem> = ({ item }) => {
    return (
        <li>
            <StyledItem>
                <div className="box-info">
                    <div className="box-info--content">
                        <div className="description">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                        <div className="tags">
                            {item.categories.map(
                                (category: string, i: number) => (
                                    <React.Fragment key={i}>
                                        <span> {category}</span>{" "}
                                        {item.categories.length > i + 1
                                            ? "/"
                                            : ""}
                                    </React.Fragment>
                                )
                            )}
                        </div>
                    </div>
                    <div className="box-info--footer">
                        <ul>
                            {item.subscriptions.map(
                                (sub: ISubscriptions, i: number) => (
                                    <li key={i}>
                                        <span>{sub.name}</span>
                                        <h3>
                                            {sub.price ? (
                                                <React.Fragment>
                                                    {(sub.price / 100).toFixed(
                                                        2
                                                    )}
                                                    <sup>
                                                        {
                                                            literals.generic
                                                                .currency
                                                        }
                                                    </sup>
                                                </React.Fragment>
                                            ) : (
                                                literals.list.free
                                            )}
                                        </h3>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </StyledItem>
        </li>
    );
};
