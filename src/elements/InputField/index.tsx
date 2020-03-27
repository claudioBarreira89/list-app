import React from "react";
import { StyledInputField } from "./styles";

interface IInputField {
    handleChange: (value: string) => void;
    placeholder?: string;
}

const InputField: React.FunctionComponent<IInputField> = ({
    placeholder,
    handleChange
}) => {
    return (
        <StyledInputField
            placeholder={placeholder}
            onChange={e => handleChange(e.target.value)}
        />
    );
};

export default InputField;
