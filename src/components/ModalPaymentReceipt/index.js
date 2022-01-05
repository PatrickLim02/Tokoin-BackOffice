import React, { useState } from "react";
import {
    Modal,
    ModalBody,
    Row,
    Col,
} from "reactstrap";
import { connect } from "react-redux";
import { setModalPaymentReceipt } from "../../redux";
import ButtonComponent from "../Button";

const ModalPaymentReceipt = (props) => {
    const {
        className,
        modalPaymentReceipt,
        setModalPaymentReceipt,
    } = props;

    return (
        <div>
            <Modal isOpen={modalPaymentReceipt.visible} className={className}>
                <ModalBody>
                    <Row className="justify-center-self">
                        <Col
                            md="12"
                            className="text-center justify-content-center"
                        >
                            <h2>Payment Receipt</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="text-center modal-pending">
                            <p>Payment Receipt</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <ButtonComponent
                                className="w-100"
                                label="No"
                                color="dark"
                                handleSubmit={() => setModalPaymentReceipt({ visible: false })}
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
        modalPaymentReceipt: state.generalReducer.modalPaymentReceipt,
    };
};

export default connect(mapStateProps, { setModalPaymentReceipt })(
    ModalPaymentReceipt
);
