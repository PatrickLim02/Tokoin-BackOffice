import React from 'react'
import GridTable from "../../components/GridTable";
import { FaTrash, FaPencilAlt, FaEye } from "react-icons/fa";
import GridData from "./mock.json";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux"
import { setModalDeleteOrder } from '../../redux'

const FaqList = (props) => {
    const history = useHistory()
    const { setModalDeleteOrder } = props

    const redirectToAddFaq = () => {
        history.push('/add-faq')
    }
    const redirectToEditFaq = (ev) => {
        history.push(`/edit-faq/${ev.id}`)
    }
    return (
        <div>
            <h3>FAQ</h3>
            <GridTable
                withSearch
                data={GridData}
                withAddBtn
                btnAddHandle={() => redirectToAddFaq()}
                withActions
                actionsComponent={(ev) => {
                    return (
                        <>
                            <FaPencilAlt data-toggle="tooltip" data-placement="bottom" title="edit" onClick={() => redirectToEditFaq(ev)} /> &nbsp;
                            <FaTrash data-toggle="tooltip" data-placement="bottom" title="delete" onClick={() => setModalDeleteOrder({ visible: true })} />
                        </>
                    );
                }}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { setModalDeleteOrder })(FaqList)
