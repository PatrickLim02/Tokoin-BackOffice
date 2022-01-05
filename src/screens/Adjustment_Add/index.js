import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import GridTable from "../../components/GridTable";
import GridData from "./mock.json";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import ButtonComponent from '../../components/Button';
function Adjustment_List() {
    return (
        <div>
           <h3>Add Product</h3>
            <Card>
                <CardTitle className="d-flex justify-content-between">
                    <h3>Adjustment Number Auto</h3>
                    <h5>Adjustment Date Auto</h5>
                </CardTitle>
          
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

export default Adjustment_List
