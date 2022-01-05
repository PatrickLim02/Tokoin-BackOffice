import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert,
    Row,
    Col,
    Form,
    FormGroup,
    Label
} from "reactstrap";
import { connect } from "react-redux";
import { setModalDeleteOrder } from "../../redux";
import ButtonComponent from "../Button";
import TextInput from '../TextInput'

const ModalDeleteOrder = (props) => {
    const {
        className,
        modalDeleteOrder,
        setModalDeleteOrder,
    } = props;

    return (
        <div>
            <Modal isOpen={modalDeleteOrder.visible} className={className}>
                <ModalBody>
                    <Row className="justify-center-self">
                        <Col
                            md="12"
                            className="text-center justify-content-center"
                        >
                            <h2>Delete</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center modal-pending">
                            <p>Are you sure to delete?</p>
                        </Col>
                        <Col md="12" className="text-center modal-return-pending">

                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <ButtonComponent
                                className="w-100"
                                label="Yes"
                                color="dark"
                            />
                        </Col>
                        <Col md="6">
                            <ButtonComponent
                                className="w-100"
                                label="No"
                                color="dark"
                                handleSubmit={() => setModalDeleteOrder({ visible: false })}
                            />
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    );
};

const mapStateProps = (state) => {
    return {
        modalDeleteOrder: state.generalReducer.modalDeleteOrder,
    };
};

export default connect(mapStateProps, { setModalDeleteOrder })(
    ModalDeleteOrder
);
