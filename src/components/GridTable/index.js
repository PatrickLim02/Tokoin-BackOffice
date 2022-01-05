import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import InputSearch from "../InputSearch";
import { Table, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Button from "../Button";
import { styles } from "./styles";
import LoadingCover from "../LoadingCover";
import { useHistory } from "react-router-dom";
import { useDebounce, useDidUpdateEffect } from "../../helpers/hooks";
const GridTable = (props) => {
  const {
    data,
    withActions,
    actionsComponent,
    withSearch,
    searchPlaceholder = "Search...",
    withAddBtn,
    btnAddHandle,
    searchBy,
  } = props;
  const [column, setColumn] = useState([]);
  const [buffering, setBuffering] = useState(false);
  const [arr, setArr] = useState(data);
  const [searchValue, setSearchValue] = useState();
  const debouncedSearchVal = useDebounce(searchValue, 1000);

  useEffect(() => {
    var datas = [];
    // eslint-disable-next-line array-callback-return
    arr.map((item) => {
      var items = Object.values(item);
      datas = [...datas, items];
      setColumn(datas);
    });
  }, [arr]);

  useDidUpdateEffect(() => {
    var datas = [];
    setBuffering(true);
    const data = arr.filter((item) => {
      return item[searchBy]
        .toString()
        .toLowerCase()
        .includes(debouncedSearchVal);
    });
    if (data.length === 0) {
      setColumn([])
    }
    else {
      data.map((item) => {
        var items = Object.values(item);
        datas = [...datas, items];
        setColumn(datas);
      });
    }
    setTimeout(() => {
      setBuffering(false);
    }, 1000);
  }, [debouncedSearchVal]);

  return (
    <>
      {withSearch || withAddBtn ? (
        <Row className="mb-2">
          <Col md="2">
            {withAddBtn && (
              <Button
                style={styles.btnAdd}
                color="warning"
                label={"+ Add New"}
                handleSubmit={() => btnAddHandle()}
              />
            )}
          </Col>
          <Col md={withAddBtn ? "10" : "12"}>
            {withSearch && (
              <InputSearch
                searchChange={(ev) => setSearchValue(ev.target.value)}
                placeholder={searchPlaceholder}
              />
            )}
          </Col>
        </Row>
      ) : null}
      {buffering ? (
        <LoadingCover size={"3x"} />
      ) : column.length === 0 ? <h3>There're no data in your Search</h3> : (
        <div className="table-container">
          <Table borderless>
            <tr>
              {Object.keys(data[0]).map((key, idx) => {
                if (key === "id") {
                  return null;
                }
                return (
                  <th className="font-size-grid" key={idx}>
                    {key.replace("_", " ")}
                  </th>
                );
              })}
              {withActions && <th className="font-size-grid">Actions</th>}
            </tr>
            {column?.map((item, index) => {
              return (
                <tr key={index} className="orderContainer">
                  {item?.map((values, idx) => {
                    console.log(values)
                    if (values === item[0]) {
                      return null
                    }
                    return <td className="column-width" key={idx}>{values}</td>;
                  })}
                  {withActions && actionsComponent(data[index])}
                </tr>
              );
            })}
          </Table>
        </div>
      )}
    </>
  );
};

GridTable.propTypes = {
  btnAddHandle: PropTypes.func,
  actionsComponent: PropTypes.func,
};

GridTable.defaultProps = {
  btnAddHandle: () => null,
  actionsComponent: () => null,
};

export default GridTable;
