import React from "react";
import { connect } from "react-redux";
import GridTable from "../../components/GridTable";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import GridData from "./mock.json";
function PurchaseList() {
  return (
    <div>
      <h3> ini Purchase List </h3>
      <GridTable
        withAddBtn
        withSearch
        data={GridData}
        withActions
        actionsComponent={(ev) => {
          return (
            <>
              <FaPencilAlt
                onClick={() => console.log("hasil callback edit: ", ev)}
              />{" "}
              &nbsp;
              <FaTrash
                onClick={() => console.log("hasil callback tash: ", ev)}
              />
            </>
          );
        }}
      />
    </div>
  );
}

export default PurchaseList;
