import React from "react";
import { StyledInputField } from "./styles";

interface IInputField {
    placeholder?: string;
}

const InputField: React.FunctionComponent<IInputField> = ({ placeholder }) => {
    return <StyledInputField placeholder={placeholder} />;
};

export default InputField;
