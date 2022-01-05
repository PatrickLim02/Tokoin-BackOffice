import React, { useState } from "react";
import { connect } from "react-redux";
import GridTable from "../../components/GridTable";
import { FaTrash, FaPencilAlt, FaEye } from "react-icons/fa";
import GridData from "./mock.json";
import { useHistory } from "react-router-dom"
function NewOrder(props) {
    const history = useHistory()

    const redirectToOrderDetail = (ev) => {
        history.push(`/order-detail/${encodeURIComponent(ev.sales_number)}/${ev.status}`)
    }
    return (
        <div>
            <h3> New Order</h3>
            <GridTable
                withSearch
                data={GridData}
                withActions
                actionsComponent={(ev) => {
                    return (
                        <>
                            <FaPencilAlt data-toggle="tooltip" data-placement="bottom" title="edit" onClick={() => console.log('hasil callback edit: ', ev)} /> &nbsp;
                            <FaEye data-toggle="tooltip" data-placement="bottom" title="detail" onClick={() => redirectToOrderDetail(ev)} />
                            &nbsp;&nbsp;
                            <FaTrash data-toggle="tooltip" data-placement="bottom" title="delete" onClick={() => console.log('hasil callback tash: ', ev)} />
                        </>
                    );
                }}
            />
        </div>
    );
}

export default NewOrder;
