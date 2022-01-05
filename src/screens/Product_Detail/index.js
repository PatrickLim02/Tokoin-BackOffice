import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import Product1 from '../../assets/jpg/product1.jpg'
import GridTable from "../../components/GridTable";
import GridData from "./mock.json";

function Product_Detail() {
    return (
        <div>
            <h3>Product Detail</h3>
            <Card>
                <Row>
                    <Col md="5">
                        <div>
                            <img src={Product1} width="70%" />
                        </div>

                    </Col>
                    <Col md="7">
                        <Row className="pb-3">
                            <Col md="4">
                                Product Name
                            </Col>
                            <Col md="8">
                                Satin Gift Box
                            </Col>
                        </Row>
                        <Row className="pb-3">
                            <Col md="4">
                                Product Description
                            </Col>
                            <Col md="8">
                                Include: <br />
                                - Satin Ribbon <br />
                                - Dired Flower  <br />
                                - Hang Tag <br />
                                - Wrapping Paper <br />
                                - Sticker <br />
                                - Greeting Card <br />
                            </Col>
                        </Row>
                        <Row className="pb-3">
                            <Col md="4">
                                Variant
                            </Col>
                            <Col md="8">
                                <GridTable
                                    data={GridData}

                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Product_Detail
