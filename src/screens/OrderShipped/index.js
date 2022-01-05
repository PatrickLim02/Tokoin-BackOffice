/* eslint-disable no-undef */
import React, { useState } from "react";
import { connect } from "react-redux";
import GridTable from "../../components/GridTable";
import { FaTrash, FaPencilAlt, FaEye } from "react-icons/fa";
import GridData from "./mock.json";
import { useHistory } from "react-router-dom"
function OrderOnProcess(props) {
    const query = new URLSearchParams(window.location.search);
    const [status, setStatus] = useState(query.get("status"));
    const history = useHistory()

    const redirectToOrderDetail = (ev) => {
        history.push(`/order-detail/${encodeURIComponent(ev.sales_number)}/${ev.status}`)
    }
    const redirectToAddOrderNew = () => {
        history.push('/add-order')
    }
    return (
        <div>
            <h3> Order Shipped </h3>
            <GridTable
                withAddBtn
                withSearch
                searchBy='customer' //di ambil dari key di JSON nya
                btnAddHandle={() => redirectToAddOrderNew()}
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

export default OrderOnProcess;
