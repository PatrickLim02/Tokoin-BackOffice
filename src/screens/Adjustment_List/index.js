import React from "react";
import { connect } from "react-redux";
import GridTable from "../../components/GridTable";
import { FaTrash, FaPencilAlt, FaEye } from "react-icons/fa";
import GridData from "./mock.json";
import { useHistory } from "react-router-dom"

function Adjustment_List(props) {
  const history = useHistory()

  const redirectToAdjDetail = (ev) => {
    history.push(`/adjustment-detail/${encodeURIComponent(ev.adjustment_no)}`)
  }

  const redirectToAdjAdd = () => {
    history.push('/adjustment-add/')
  }

  return (
    <div>
      <h3>Adjustment</h3>
      <GridTable
        withAddBtn
        btnAddHandle={() => redirectToAdjAdd()}
        withSearch
        data={GridData}
        searchBy='adjustment_date'
        searchPlaceholder='Search Adjustment Date...'
        withActions
        actionsComponent={(ev) => {
          return (
            <>
              <FaEye
                onClick={() => redirectToAdjDetail(ev)}
              />{" "}
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

export default Adjustment_List;
