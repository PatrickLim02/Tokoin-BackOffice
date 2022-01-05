import React from 'react'
import GridTable from "../../components/GridTable";
import { FaTrash, FaPencilAlt, FaEye } from "react-icons/fa";
import GridData from "./mock.json";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux"
import { setModalDeleteOrder } from '../../redux'

const Banner_List = (props) => {
    const { setModalDeleteOrder } = props

    const history = useHistory()
    const redirectToBannerAdd = () => {
        history.push('/banner-add')
    }
    const redirectToBannerEdit = (ev) => {
        history.push(`/banner-edit/${ev.id}`)
    }
    return (
        <div>
            <h3>Banner</h3>
            <GridTable
                withSearch
                data={GridData}
                withAddBtn
                btnAddHandle={() => redirectToBannerAdd()}
                withActions
                actionsComponent={(ev) => {
                    return (
                        <>
                            <FaPencilAlt data-toggle="tooltip" data-placement="bottom" title="edit" onClick={() => redirectToBannerEdit(ev)} /> &nbsp;
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

export default connect(mapStateToProps, { setModalDeleteOrder })(Banner_List)
