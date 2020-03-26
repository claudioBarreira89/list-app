import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import withStyles from "./hocs/withStyles";
import AppWrapper from "./components/AppWrapper";

const App = () => (
    <Provider store={store}>
        <AppWrapper />
    </Provider>
);

export default withStyles(App);
