import { IInitialSate, actionTypes } from "./types";

export const initialState: IInitialSate = {
    category: "",
    searchQuery: "",
    data: null,
    numberOfPages: 0,
    currentPage: 0
};

export const appReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case actionTypes.SET_SEARCH_QUERY: {
            return {
                ...state,
                searchQuery: payload
            };
        }
        case actionTypes.SET_CATEGORY: {
            return {
                ...state,
                category: payload
            };
        }
        case actionTypes.SET_DATA: {
            return {
                ...state,
                data: payload.data,
                ...payload
            };
        }
        default: {
            return state;
        }
    }
};
