import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Label, Row, Col, Input, Container, Button, Card, CardTitle } from 'reactstrap'
import ReturnOrderList from '../ReturnOrderList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { returnProductListItem } from './dummy_returnOrderList'
function ReturnOrder(props) {
    const { id } = props.match.params
    const renderItem = () => {
        return (
            returnProductListItem.map((item, index) =>
            (
                <ReturnOrderList item={item} />
            )
            )
        )
    }

    return (
        <div className="return-container ">
            <Card className="ps-4 pe-4">
                <Row className="mb-1">
                    <Col md="12" className="title-center">
                        <h1>Return</h1>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col md={12} className="title-border">{decodeURIComponent(id)}</Col>
                </Row>
                <Row className="mb-3">
                    <Col md="1" xs="1" className="pad0">
                        <Input type="checkbox" />
                    </Col>
                    <Col md="11" xs="11">
                        ORDERS
                    </Col>
                </Row>

                {renderItem()}



                <Row className="mb-1 total">
                    <Col className="pad0">
                        Total
                    </Col>
                    <Col className="text-right">
                        IDR 50.000
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col className="pad0">Reason For Return/Refund</Col>
                </Row>
                <Row className="mb-3 total">
                    <Col className="pad0">
                        <Input type="select" >
                            <option>Broken</option>
                            <option>Wrong Variant</option>
                        </Input>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col className="ps-0">
                        <Button className="w-100 bg-dark">Save</Button>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ReturnOrder;