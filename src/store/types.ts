export enum actionTypes {
    SET_DATA = "SET_DATA"
}

export interface IInitialSate {
    category: string;
    searchQuery: string;
    data: IDataItem[];
    numberOfPages: number;
    currentPage: number;
}

export interface IDataItem {
    id: string;
    name: string;
    description: string;
    categories: string[];
    subscriptions: ISubscriptions[];
}

export interface ISubscriptions {
    name: string;
    price: number;
}
