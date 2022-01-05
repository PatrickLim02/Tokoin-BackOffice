import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import TextInput from '../../components/TextInput'
import ButtonComponent from '../../components/Button';
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import GridTable from "../../components/GridTable";
import GridData from "./mock.json";

function AddProduct() {
    return (
        <div>
            <h3>Add Product</h3>
            <Card>
                <CardTitle>
                    <h3>Product Number Auto</h3>
                </CardTitle>
                <Row className="padb">
                    <Col md="3 width-order-number">
                        Product Image
                    </Col>
                    <Col md="9">
                        <TextInput type={"file"} />
                    </Col>
                </Row>

                <Row className="padb">
                    <Col md="3 width-order-number">
                        Product Name
                    </Col>
                    <Col md="9">
                        <TextInput type={"select"} />
                    </Col>
                </Row>

                <Row className="padb">
                    <Col md="3 width-order-number">
                        Product Description
                    </Col>
                    <Col md="9">
                        <TextInput type={"textarea"} />
                    </Col>
                </Row>


                <h3>Variants</h3>
                <GridTable
                    data={GridData}
                    withActions
                    actionsComponent={(ev) => {
                        return (
                            <>
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

                <div className="d-flex justify-content-end">
                    <ButtonComponent className="w-90px me-3" color={"dark"} label={"Cancel"} />
                    <ButtonComponent className="w-90px" color={"dark"} label={"Save"} />
                </div>
            </Card>
        </div>
    )
}

export default AddProduct

