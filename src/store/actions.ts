import { actionTypes, IDataItem } from "./types";

export const setData = (data: IDataItem[]) => ({
    type: actionTypes.SET_DATA,
    payload: data
});

export const fetchData = page => async (dispatch, getState) => {
    const url = `http://${location.hostname}:3001`;
    const state = getState();

    try {
        const query = `${url}/api/data?page=${page || state.currentPage}`;

        const response = await fetch(query);
        const json = await response.json();

        if (response.status === 200) {
            dispatch(setData(json));
        }
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};
