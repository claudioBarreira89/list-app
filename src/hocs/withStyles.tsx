import React from "react";
import GlobalStyles from "../styles";

const withStyles = (Component: React.FunctionComponent) => {
    return (
        props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
    ) => (
        <div>
            <GlobalStyles />
            <Component {...props} />
        </div>
    );
};

export default withStyles;
