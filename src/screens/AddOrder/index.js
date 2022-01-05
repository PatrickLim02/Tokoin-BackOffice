import React, { useState } from 'react'
import { Col, Row, Input } from 'reactstrap'
import TextInput from '../../components/TextInput'
import { FaTrash, FaPencilAlt, FaEye } from "react-icons/fa";
import GridData from "./mock.json";
import GridTable from "../../components/GridTable";
import { styles } from "./styles"
import { useHistory } from 'react-router-dom';
import ButtonComponent from '../../components/Button';

const AddOrder = (props) => {
    const history = useHistory()
    const date = new Date()
    const getMonth = date.getMonth() + 1
    const renderMonth = () => {
        if (getMonth < 10) {
            return '0' + getMonth
        }
        else {
            return getMonth
        }
    }
    const todaysDate = date.getFullYear() + '-' + renderMonth() + '-' + date.getDate()
    const [dtp, setDtp] = useState(todaysDate)
    const redirectToOrderDetailDelivering = (ev) => {
        history.push(`/order-detail/${encodeURIComponent(ev.product_number)}/${ev.status}`)
    }
    const redirectToOrderShipped = (ev) => {
        history.push('/order-shipped')
    }
    console.log(dtp)

    return (
        <div>
            <h3>Add Order</h3>
            <div className="card">
                <h3 className="title-border">Order Number Auto</h3>
                <div className="content-order-number">
                    <Row className="padb">
                        <Col lg="6">
                            <Row>
                                <Col md="3 width-order-number">
                                    Order Date
                                </Col>
                                <Col md="9">
                                    <TextInput type={"date"} value={dtp} handleChange={(ev) => setDtp(ev.target.value)} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="6">
                            <Row>
                                <Col md="3 width-order-number">
                                    Courier
                                </Col>
                                <Col md="9">
                                    <TextInput type={"text"} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="padb">
                        <Col lg="6">
                            <Row>
                                <Col md="3 width-order-number">
                                    Marketplace
                                </Col>
                                <Col md="9">
                                    <select className="minimal">
                                        <option>Kotakin's Website</option>
                                        <option>Tokopedia</option>
                                    </select>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="6">
                            <Row>
                                <Col md="3 width-order-number">
                                    AWB No.
                                </Col>
                                <Col md="9">
                                    <TextInput type={"text"} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="padb">
                        <Col lg="6">
                            <Row>
                                <Col md="3 width-order-number">
                                    Marketplace Order No.
                                </Col>
                                <Col md="9">
                                    <TextInput type={"text"} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="6">
                            <Row>
                                <Col md="3 width-order-number">
                                    Delivery Date
                                </Col>
                                <Col md="9">
                                    <TextInput type={"date"} value={dtp} handleChange={(ev) => setDtp(ev.target.value)} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="padb">
                        <Col lg="6">
                            <Row>
                                <Col md="3 width-order-number">
                                    Customer
                                </Col>
                                <Col md="9">
                                    <TextInput type={"number"} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="6">
                            <Row>
                                <Col md="3 width-order-number">
                                    Total
                                </Col>
                                <Col md="9">
                                    <TextInput type={"number"} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <h3 className="padt10 font-size" style={styles.titleSize}>Product Details</h3>
                <GridTable
                    data={GridData}
                    withActions
                    actionsComponent={(ev) => {
                        return (
                            <>
                                <FaPencilAlt data-toggle="tooltip" data-placement="bottom" title="edit" onClick={() => console.log('hasil callback edit: ', ev)} /> &nbsp;
                                <FaEye data-toggle="tooltip" data-placement="bottom" title="detail" onClick={() => redirectToOrderDetailDelivering(ev)} />
                                &nbsp;&nbsp;
                                <FaTrash data-toggle="tooltip" data-placement="bottom" title="delete" onClick={() => console.log('hasil callback tash: ', ev)} />
                            </>
                        );
                    }}
                />

                <div class="d-flex justify-content-end">
                    <ButtonComponent className="me-4" style={styles.buttonSize} color={"dark"} label={"Cancel"} />
                    <ButtonComponent handleSubmit={redirectToOrderShipped} style={styles.buttonSize} color={"dark"} label={"Save"} />
                </div>
            </div>
        </div>
    )
}

export default AddOrder;
