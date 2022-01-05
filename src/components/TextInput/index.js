import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from 'prop-types';
import { styles } from "./styles";

const TextInput = (props) => {
    const { type, name, id, placeholder, value, handleChange, color, rows } = props;
    return (
        <Input
            style={type === 'loginForm' ? styles.inputContainerLogin : styles.inputContainer}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            color={color}
            onChange={(ev) => handleChange(ev)}
            rows={rows}
        />
    )

};

TextInput.propTypes = {
    handleChange: PropTypes.func,
};

TextInput.defaultProps = {
    handleChange: () => null,
};


export default TextInput;
