import { IInitialSate, actionTypes } from "./types";

export const initialState: IInitialSate = {
    category: "Channels",
    searchQuery: "",
    data: null,
    numberOfPages: 0,
    currentPage: 0
};

export const appReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case actionTypes.SET_DATA: {
            return {
                ...state,
                ...payload
            };
        }
        default: {
            return state;
        }
    }
};
