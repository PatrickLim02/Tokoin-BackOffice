import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import TextInput from '../../components/TextInput'
import ButtonComponent from '../../components/Button';
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import GridTable from "../../components/GridTable";


function Banner_Add() {
    return (
        <div>
            <h3>Add Banner</h3>
            <Card>
                <Row className="padb">
                    <Col md="3 width-order-number">
                        Banner Image
                    </Col>
                    <Col md="9">
                        <TextInput type={"file"} />
                    </Col>
                </Row>


                <Row className="padb">
                    <Col md="3 width-order-number">
                        Banner Description
                    </Col>
                    <Col md="9">
                        <TextInput type={"textarea"} />
                    </Col>
                </Row>

                <div className="d-flex justify-content-end">
                    <ButtonComponent className="w-90px me-3" color={"dark"} label={"Cancel"} />
                    <ButtonComponent className="w-90px" color={"dark"} label={"Save"} />
                </div>
            </Card>
        </div>
    )
}

export default Banner_Add

