import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import GridTable from "../../components/GridTable";
import GridData from "./mock.json";

function Adjustment_Detail(props) {
    return (
        <div>
            <h3>Adjustment Product</h3>
            <Card>
                <CardTitle className="d-flex justify-content-between">
                    <h3>001/ADJST/XI/2021</h3>
                    <h5>26 November 2021</h5>
                </CardTitle>

                <GridTable
                    data={GridData}
                  
                />


            </Card>
        </div>
    )
}

export default Adjustment_Detail
