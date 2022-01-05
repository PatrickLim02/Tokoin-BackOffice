import React from "react";
import PropTypes from "prop-types";
import {styles} from './styles'
const InputSearch = (props) => {
    const {
        searchChange,
        placeholder,
        value,
    } = props;

    return (
        <input style={styles.inputContainer} type="text" onChange={(ev) => searchChange(ev)} placeholder={placeholder} value={value} />
    );
};

InputSearch.propTypes = {
    searchChange: PropTypes.func,
};

InputSearch.defaultProps = {
    searchChange: () => null,
};

export default InputSearch;
