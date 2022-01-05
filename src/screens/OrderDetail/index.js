import React, { useState } from 'react'
import { Col, Row } from "reactstrap"
import Image from "../../assets/jpg/product1.jpg"
import { useHistory } from "react-router-dom"
import { setModalRejectOrder, setModalPaymentReceipt, setModalDeleteOrder } from '../../redux'
import { connect } from "react-redux"
import ButtonComponent from "../../components/Button"
import TextInput from "../../components/TextInput"
import { Input } from "reactstrap"

const OrderDetail = (props) => {
    const [image, setImage] = useState('')
    const [disabled, setDisabled] = useState(false)
    const { setModalRejectOrder, setModalPaymentReceipt, setModalDeleteOrder } = props
    const { status } = props.match.params
    const { id } = props.match.params
    const history = useHistory()
    console.log(decodeURIComponent(id))

    const redirectToOrderShipped = () => {
        history.push('/order-shipped')
    }

    const redirectToOnProcess = () => {
        history.push('/order-on-process')
    }

    const redirectToReturn = () => {
        history.push('/order-return')
    }

    const redirectToOrderDone = () => {
        history.push('/order-done')
    }
    const redirectToReturnOrder = () => {
        history.push(`/return-order/${encodeURIComponent(id)}`)
    }
    const redirectToEditOrder = () => {
        history.push('/edit-order')
    }

    const upload = () => {
        console.log('image:', image)
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file)

        if (e.target.value.length > 0) {
            setDisabled({
                disabled: true
            })
        }
    }
    const orders = () => {
        return (
            <div class="d-flex flex-row bd-highlight mb-3">
                <div class="d-flex flex-column mb-0">
                    <div class="p-2 bd-highlight font-transform">
                        Orders
                    </div>
                    <div class="px-2 bd-highlight">
                        <div class="d-flex">
                            <div class="flex-shrink-0">
                                <img
                                    src={Image}
                                    alt="ProductImage"
                                    width={"100px"}
                                />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <div class="d-flex align-items-start flex-column bd-highlight mb-3">
                                    <div class="px-2 bd-highlight">
                                        Product
                                    </div>
                                    <div class="px-2 bd-highlight">
                                        Variant
                                    </div>
                                    <div class="mt-4 px-2 bd-highlight">
                                        Qty x Price
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const historyDetail = () => {
        if (decodeURIComponent(id) === "01/TOPED/XI/2021") {
            return ""
        }
        if (decodeURIComponent(id) === "01/PRCHS/XI/2021") {
            if (status !== "Cancelled" && status !== "Pending") {
                return (
                    <div class="border-bottom border-dark">
                        <div class="d-flex flex-row bd-highlight mb-3">
                            <div class="d-flex flex-column mb-0">
                                <div class="p-2 bd-highlight font-transform">
                                    History
                                </div>
                                <div class="px-2 bd-highlight">Ordered Confirmed</div>
                                <div class="px-2 bd-highlight">Ordered Shipped</div>
                                <div class="px-2 bd-highlight">Order Return</div>
                                <div class="px-2 bd-highlight">Ordered Done</div>
                            </div>
                            <div class="d-flex flex-column mb-0">
                                <div class="p-2 bd-highlight">&nbsp;</div>
                                <div class="px-2 bd-highlight">-</div>
                                <div class="px-2 bd-highlight">-</div>
                                <div class="px-2 bd-highlight">-</div>
                                <div class="px-2 bd-highlight">-</div>
                            </div>
                        </div>
                    </div>
                )
            }
            if (status === "Cancelled") {
                return (
                    <div class="border-bottom border-dark">
                        <div class="d-flex flex-row bd-highlight mb-3">
                            <div class="d-flex flex-column mb-0">
                                <div class="p-2 bd-highlight font-transform">
                                    History
                                </div>
                                <div class="px-2 bd-highlight">Ordered Confirmed</div>
                                <div class="px-2 bd-highlight">Ordered Cancelled</div>
                            </div>
                            <div class="d-flex flex-column mb-0">
                                <div class="p-2 bd-highlight">&nbsp;</div>
                                <div class="px-2 bd-highlight">20 October 2021</div>
                                <div class="px-2 bd-highlight">21 October 2021</div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }

    const handleCourier = () => {
        if (status !== "Done" && status !== "Cancelled") {
            return (
                <div class="d-flex flex-column mb-0">
                    <div class="p-2 bd-highlight">Courier</div>
                    <div class="px-2 bd-highlight">Sicepat</div>
                </div>
            )
        }
        return ""
    }

    const handlePayment = () => {
        if (status !== "Waiting for Payment") {
            return (
                <div className="d-flex flex-row bd-highlight">
                    <div class="d-flex flex-column mb-0">
                        <div class="p-2 bd-highlight">Payment</div>
                        <div class="px-2 bd-highlight">BCA</div>
                        <div class="px-2 bd-highlight">Mary Jane</div>
                        <div class="px-2 bd-highlight">8305123456</div>
                    </div>
                    {handleCourier()}
                    {handleAWB()}
                </div>

            )
        }
        return (
            <div className="d-flex flex-row bd-highlight mb-3">
                <div class="d-flex flex-column mb-0">
                    <div class="p-2 bd-highlight">Payment</div>
                    <div class="px-2 bd-highlight">-</div>
                </div>
            </div>
        )
    }

    const handleButton = () => {
        if (status === "Return On Process") {
            redirectToOrderDone()
        }
        if (status === "Refund Done") {
            setModalPaymentReceipt({ visible: true })
        }
    }

    const handleLabelButton = () => {
        if (status === "Return On Process") {
            return 'Done'
        }
        if (status === "Refund Done") {
            return 'Proof of Refund'
        }
    }

    const buttonRenderer = () => {
        if (status === "Pending") {
            return (
                <div class="d-flex flex-column mb-0">
                    <ButtonComponent handleSubmit={() => setModalPaymentReceipt({ visible: true })} className="mb-2" color="dark" label={"Payment Receipt"} />
                    <ButtonComponent handleSubmit={redirectToOnProcess} className="mb-2" color="dark" label={"Accept Order"} />
                    <ButtonComponent handleSubmit={() => setModalRejectOrder({ visible: true })} className="mb-2" color="dark" label={"Reject Order"} />
                </div>
            )
        }
        if (status === "Return Pending") {
            return (
                <div class="d-flex flex-column mb-0">
                    <ButtonComponent handleSubmit={redirectToReturn} className="mb-2" color="dark" label={"Accept"} />
                    <ButtonComponent handleSubmit={() => setModalRejectOrder({ visible: true })} className="mb-2" color="dark" label={"Reject"} />
                </div>
            )
        }
        if (status === "Return On Process" || status === "Refund Done") {
            return (
                <div class="d-flex flex-column mb-0">
                    <ButtonComponent handleSubmit={handleButton} className="mb-2" color="dark" label={handleLabelButton()} />
                </div>
            )
        }
        if (status === "Delivering") {
            if (decodeURIComponent(id) === "01/TOPED/XI/2021") {
                return (
                    <div class="d-flex flex-column mb-0">
                        <ButtonComponent handleSubmit={redirectToReturnOrder} className="mb-2" color="dark" label={"Return Order"} />
                        <ButtonComponent handleSubmit={redirectToEditOrder} className="mb-2" color="dark" label={"Edit Order"} />
                        <ButtonComponent handleSubmit={() => setModalDeleteOrder({ visible: true })} className="mb-2" color="dark" label={"Delete Order"} />
                    </div>
                )
            }
        }
        if (status === "Refund Pending") {
            return (
                <div class="d-flex flex-column mb-0">
                    <ButtonComponent handleSubmit={upload} className="mb-2" color="dark" label={"Upload Proof Of Refund"} disabled={disabled} />
                </div>
            )

        }
    }

    const handleAWB = () => {
        if (status === "On Process") {
            return (
                <div class="d-flex flex-column mb-0">
                    <div class="p-2 bd-highlight">AWB No.</div>
                    <div class="px-2 bd-highlight">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="AWB Number" aria-label="AWB Number" aria-describedby="basic-addon2" disabled />
                            <div class="input-group-append">
                                <button onClick={redirectToOrderShipped} class="btn btn-dark" type="button">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (status === "Delivering" || status === "Return On Process" || status === "Return Pending" || status === "Refund Pending" || status === "Refund Done" || status === "Done" || status === "Cancelled") {
            return (
                <div class="d-flex flex-column mb-0">
                    <div class="p-2 bd-highlight">AWB No.</div>
                    <div class="px-2 bd-highlight">001223223232</div>
                </div>
            )
        }
    }

    const returnAWB = () => {
        if (status === "Return Pending" || status === "Return On Process") {
            return (
                <div class="d-flex flex-column mb-0">
                    <div class="p-2 bd-highlight">Return AWB No.</div>
                    <div class="px-2 bd-highlight">-</div>
                </div>
            )
        }
    }

    const returnTo = () => {
        if (status === "Return On Process" || status === "Return Pending" || status === "Refund Pending" || status === "Refund Done") {
            return (
                <div class="border-bottom border-dark">
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="d-flex flex-column mb-0 max-width">
                            <div class="p-2 bd-highlight">
                                Reason
                            </div>
                            <div class="px-2 bd-highlight">Item arrived in a defected condition</div>
                        </div>
                        <div class="d-flex flex-column mb-0">
                            <div class="p-2 bd-highlight">
                                Return To
                            </div>
                            <div class="px-2 bd-highlight">-</div>
                        </div>
                        {returnAWB()}
                    </div>
                </div>
            )
        }
    }

    const numberTitle = () => {
        if (decodeURIComponent(id) === "01/TOPED/XI/2021") {
            return "Marketplace Order No."
        }
        return "Member"
    }

    const salesNumber = () => {
        if (decodeURIComponent(id) === "01/TOPED/XI/2021") {
            return "INV/20211027/MPL/1706433015"
        }
        return "Mary Jane"
    }
    const addressCustomer = () => {
        if (decodeURIComponent(id) === "01/TOPED/XI/2021") {
            return (
                <div className="border-bottom border-dark">
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="d-flex flex-column">
                            <div class="p-2 bd-highlight font-transform">
                                Customer
                            </div>
                            <div class="px-2 bd-highlight">Lilo</div>
                        </div>
                        {handleCourier()}
                        {handleAWB()}
                    </div>
                </div>
            )
        }
        return (
            <div className="border-bottom border-dark">
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="d-flex flex-column">
                        <div class="p-2 bd-highlight font-transform">
                            Address
                        </div>
                        <div class="px-2 bd-highlight">Mary Jane</div>
                        <div class="px-2 bd-highlight">085321232123</div>
                        <div class="px-2 bd-highlight">
                            Jl. Thamrin No.123 Medan
                        </div>
                    </div>
                    {handlePayment()}
                </div>
            </div>
        )
    }

    const proofOfRefund = () => {
        if (status === "Refund Pending") {
            return (
                <div class="border-bottom border-dark">
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="d-flex flex-column mb-0">
                            <div class="p-2 bd-highlight font-transform">
                                Proof Of Refund
                            </div>
                            <Input
                                type="file"
                                name="image"
                                className="px-2"
                                onChange={(e) => onImageUpload(e)}
                            />
                        </div>
                        <div class="d-flex flex-column mb-0">
                            <div class="p-2 bd-highlight">&nbsp;</div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="card">
            <Row className="px-2">
                <Col className="font-size" xs={6}>
                    Order {decodeURIComponent(id)}
                </Col>
                <Col className="text-right" xs={6}>
                    20 October 2021
                </Col>
            </Row>
            <span class="border-bottom border-dark"></span>
            <Row className="px-2">
                <Col xs={6}>
                    <Row>
                        <Col className="font-transform" xs={6}>{numberTitle()}</Col>
                        <Col className="text-right border-end border-dark" xs={6}>{salesNumber()}</Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col xs={6}>Status</Col>
                        <Col className="text-right font-transform" xs={6}>{status}</Col>
                    </Row>
                </Col>
            </Row>
            <span class="border-bottom border-dark"></span>
            {addressCustomer()}
            {returnTo()}
            {historyDetail()}
            {proofOfRefund()}
            {orders()}
            <span class="border-bottom border-dark"></span>
            <div class="d-flex mb-0">
                <div class="p-2 bd-highlight">Sub Total</div>
                <div class="ms-auto p-2 bd-highlight">IDR 50.000</div>
            </div>
            <div class="d-flex mb-0">
                <div class="p-2 bd-highlight">Shipping Cost</div>
                <div class="ms-auto p-2 bd-highlight">IDR 30.000</div>
            </div>
            <span class="border-bottom border-dark"></span>
            <div class="d-flex mb-0">
                <div class="p-2 bd-highlight">Total</div>
                <div class="ms-auto p-2 bd-highlight">IDR 80.000</div>
            </div>
            {buttonRenderer()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { setModalRejectOrder, setModalPaymentReceipt, setModalDeleteOrder })(OrderDetail)
