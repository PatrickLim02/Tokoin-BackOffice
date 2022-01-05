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
import { setModalRejectOrder } from "../../redux";
import ButtonComponent from "../Button";
import TextInput from '../TextInput'

const ModalRejectOrder = (props) => {
    const {
        className,
        modalRejectOrder,
        setModalRejectOrder,
    } = props;

    const redirectToNewOrder = () => {
        window.location.href = '/new-order'
    }

    return (
        <div>
            <Modal isOpen={modalRejectOrder.visible} className={className}>
                <ModalBody>
                    <Row className="justify-center-self">
                        <Col
                            md="12"
                            className="text-center justify-content-center"
                        >
                            <h2>Reject</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center modal-pending">
                            <p>Are you sure to reject?</p>
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <Label
                                        for="orderNumber"
                                        className="col-md-auto"
                                    >
                                        Reason
                                    </Label>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <TextInput placeholder={"Reason"} />
                                </div>
                            </div>
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
                                handleSubmit={redirectToNewOrder}
                            />
                        </Col>
                        <Col md="6">
                            <ButtonComponent
                                className="w-100"
                                label="No"
                                color="dark"
                                handleSubmit={() => setModalRejectOrder({ visible: false })}
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
        modalRejectOrder: state.generalReducer.modalRejectOrder,
    };
};

export default connect(mapStateProps, { setModalRejectOrder })(
    ModalRejectOrder
);
