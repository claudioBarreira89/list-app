import { actionTypes, IDataItem } from "./types";

export const setData = (data: IDataItem[]) => ({
    type: actionTypes.SET_DATA,
    payload: data
});

export const setCategory = (item: string) => ({
    type: actionTypes.SET_CATEGORY,
    payload: item
});

export const setSearchQuery = (value: string) => ({
    type: actionTypes.SET_SEARCH_QUERY,
    payload: value
});

export const fetchData = (page?: number) => async (dispatch, getState) => {
    const url = `http://${location.hostname}:3001`;
    const endpoint = "/api/data";
    const state = getState();

    try {
        const pageParam = `page=${page || state.currentPage}`;
        const categoryParam = `category=${state.category}`;
        const searchParam = `search=${state.searchQuery}`;
        const changePage = `changePage=${page ? 1 : 0}`;

        const query = `${url +
            endpoint}?${pageParam}&${categoryParam}&${searchParam}&${changePage}`;

        const response = await fetch(query);
        const json = await response.json();

        if (response.status === 200) {
            dispatch(setData(json));
        }
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};
