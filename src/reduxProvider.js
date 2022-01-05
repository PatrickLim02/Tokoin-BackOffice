import React, { } from "react";
import Navigation from "./screens/Navigations";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.css";
import "./shared/custom.scss";
import "./shared/gridStyles.scss";
import "./shared/navigations.scss";
import "bootstrap/dist/css/bootstrap.css";
import ModalRejectOrder from "./components/ModalRejectOrder";
import ModalPaymentReceipt from "./components/ModalPaymentReceipt";
import ModalDeleteOrder from "./components/ModalDeleteOrder";
const ReduxProvider = (props) => {

    return (
        <Provider store={store}>
            <ModalPaymentReceipt />
            <ModalRejectOrder />
            <ModalDeleteOrder />
            <Navigation />
        </Provider>
    );
};

export default ReduxProvider;
