import React from 'react'
import { Row, Col, Input } from "reactstrap"
import TextInput from '../../components/TextInput'
import { styles } from "./styles"
import ButtonComponent from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { EditFaqList } from './dummy_EditFaq'

const EditFaq = (props) => {
    const history = useHistory()
    const redirectToFaqList = () => {
        history.push('/faq-list')
    }
    return (
        <div>
            <h3>Edit Faq</h3>
            <div className="card">
                <Row className="mb-4">
                    <Col style={styles.fontSizeLabel} md={"2"}>Question</Col>
                    <Col>
                        <TextInput value={EditFaqList.question} type={"text"} placeholder={"Input Your Question"} />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col style={styles.fontSizeLabel} md={"2"}>Answer</Col>
                    <Col>
                        <TextInput value={EditFaqList.answer} rows={"6"} type={"textarea"} placeholder={"Input Your Answer"} />
                    </Col>
                </Row>
                <div class="d-flex justify-content-end">
                    <ButtonComponent className="me-4" style={styles.buttonSize} color={"dark"} label={"Cancel"} />
                    <ButtonComponent handleSubmit={redirectToFaqList} style={styles.buttonSize} color={"dark"} label={"Save"} />
                </div>
            </div>
        </div>
    )
}

export default EditFaq
