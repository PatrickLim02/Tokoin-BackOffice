import React from "react";
import { connect } from "react-redux";
import GridTable from "../../components/GridTable";
import { FaTrash, FaPencilAlt, FaEye } from "react-icons/fa";
import GridData from "./mock.json";
import { useHistory } from "react-router-dom"

function ProductList() {
  const history = useHistory()

  const redirectToProductDetail = (ev) => {
    history.push(`/product-detail/${encodeURIComponent(ev.product_number)}`)
  }

  const redirectToProductAdd = () => {
    history.push('/product-add/')
  }

  return (
    <div>
      <h3>Product List</h3>
      <GridTable
        withAddBtn
        btnAddHandle={() => redirectToProductAdd()}
        withSearch
        data={GridData}
        searchBy='product_name'
        searchPlaceholder='Search Product Name...'
        withActions
        actionsComponent={(ev) => {
          return (
            <>
              <FaEye
                onClick={() => redirectToProductDetail(ev)}
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

export default ProductList;
