import React, { } from 'react'
import { Row, Col } from 'reactstrap'
import {
    BrowserRouter as Router, Route
} from 'react-router-dom'
import { } from "react-icons/gr";
import { connect } from 'react-redux'
import { setAside } from '../../redux'
import Aside from '../../components/aside'
import Dashboard from '../../screens/Dashboard'
import PurchaseList from '../../screens/PurchaseList'
import PurchaseReturn from '../../screens/PurchaseReturn'
import NewOrder from '../../screens/NewOrder'
import OrderOnProcess from '../../screens/OrderOnProcess';
import OrderShipped from '../../screens/OrderShipped'
import OrderReturn from '../../screens/OrderReturn';
import OrderRefund from '../../screens/OrderRefund'
import OrderDone from '../../screens/OrderDone';
import OrderCancelled from '../../screens/OrderCancelled'
import OrderDetail from '../../screens/OrderDetail'
import ReturnOrder from '../ReturnOrder';
import AddOrder from '../AddOrder'
import EditOrder from '../EditOrder';

import Product_List from '../Product_List'
import Product_Add from '../Product__Add'
import Product_Detail from '../../screens/Product_Detail'

import Adjustment_List from '../Adjustment_List'
import Adjustment_Add from '../Adjustment_Add'
import Adjustment_Detail from '../Adjustment_Detail'

import FaqList from '../FaqList';
import AddFaq from '../AddFaq';
import EditFaq from '../EditFaq';

import Banner_List from '../Banner_List'
import Banner_Add from '../Banner_Add'
import Banner_Edit from '../../screens/Banner_Edit'

const Navigation = (props) => {
    const { visiblesidebar } = props

    const visibleAside = () => {
        props.setAside({ visible: visiblesidebar ? false : true })
    }

    const navigationsItems = () => {
        return [
            {
                menu: 'Sales', menuToggle: [
                    { subMenu: 'New Order', link: '/new-order' },
                    { subMenu: 'Order On Process', link: '/order-on-process' },
                    { subMenu: 'Order Shipped', link: '/order-shipped' },
                    { subMenu: 'Order Return', link: '/order-return' },
                    { subMenu: 'Order Refund', link: '/order-refund' },
                    { subMenu: 'Order Done', link: '/order-done' },
                    { subMenu: 'Order Cancelled', link: '/order-cancelled' },
                ]
            },
            {
                menu: 'Purchase', menuToggle: [
                    { subMenu: 'Purchase List', link: '/purchase-list' },
                    { subMenu: 'Purchase Return', link: '/purchase-return' },
                ]
            },
            {
                menu: 'Product', menuToggle: [
                    { subMenu: 'Product List', link: '/product-list' },
                    { subMenu: 'Adjustment   ', link: '/adjustment-list' },
                ]
            },
            {
                menu: 'Report', menuToggle: false, link: '/'
            },
            {
                menu: 'Display', menuToggle: [
                    { subMenu: 'Banner', link: '/banner-list' },
                    { subMenu: 'Faq   ', link: '/faq-list' },
                ]
            }
        ]
    }

    return (
        <Router>
            <div className="navigation-container">
                <div className={`pad0 ${!visiblesidebar ? 'aside-container' : ''}`}>
                    <Aside navigationsData={navigationsItems()} />
                </div>
                <div className="pad0 animation-transition" style={{ width: !visiblesidebar ? '80%' : '100%' }}>
                    <div className="content-container">
                        <Route exact path={'/'} component={Dashboard} />
                        <Route path={'/dashboard'} component={Dashboard} />
                        <Route path={'/purchase-list'} component={PurchaseList} />
                        <Route path={'/purchase-return'} component={PurchaseReturn} />
                        <Route path={'/new-order'} component={NewOrder} />
                        <Route path={'/order-on-process'} component={OrderOnProcess} />
                        <Route path={'/order-shipped'} component={OrderShipped} />
                        <Route path={'/order-return'} component={OrderReturn} />
                        <Route path={'/order-refund'} component={OrderRefund} />
                        <Route path={'/order-done'} component={OrderDone} />
                        <Route path={'/order-cancelled'} component={OrderCancelled} />
                        <Route path={'/order-detail/:id/:status'} component={OrderDetail} />
                        <Route path={'/return-order/:id'} component={ReturnOrder} />
                        <Route path={'/add-order'} component={AddOrder} />
                        <Route path={'/edit-order'} component={EditOrder} />

                        <Route path={'/product-list'} component={Product_List} />
                        <Route path={'/product-add'} component={Product_Add} />
                        <Route path={'/product-detail/:id'} component={Product_Detail} />

                        <Route path={'/adjustment-list'} component={Adjustment_List} />
                        <Route path={'/adjustment-add'} component={Adjustment_Add} />
                        <Route path={'/adjustment-detail/:id'} component={Adjustment_Detail} />

                        <Route path={'/faq-list'} component={FaqList} />
                        <Route path={'/add-faq'} component={AddFaq} />
                        <Route path={'/edit-faq/:id'} component={EditFaq} />

                        <Route path={'/banner-list'} component={Banner_List} />
                        <Route path={'/banner-add'} component={Banner_Add} />
                        <Route path={'/banner-edit/:id'} component={Banner_Edit} />

                    </div>

                </div>
            </div>


        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        visiblesidebar: state.generalReducer.sidebar.visible,

    }
}


export default connect(mapStateToProps, { setAside })(Navigation);