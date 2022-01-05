
import { SET_ASIDE, SET_MODAL_REJECT_ORDER, SET_MODAL_PAYMENT_RECEIPT, SET_MODAL_DELETE_ORDER } from './generalReducerTypes'

const initialState = {
    sidebar: {
        visible: true,
    },
    modalRejectOrder: {
        visible: false,
    },
    modalPaymentReceipt: {
        visible: false,
    },
    modalDeleteOrder: {
        visible: false,
    }

}

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ASIDE: return {
            ...state,
            sidebar: {
                ...state.sidebar,
                ...action.payload
            }
        }
        case SET_MODAL_REJECT_ORDER: return {
            ...state,
            modalRejectOrder: {
                ...state.modalRejectOrder,
                ...action.payload
            }
        }
        case SET_MODAL_PAYMENT_RECEIPT: return {
            ...state,
            modalPaymentReceipt: {
                ...state.modalPaymentReceipt,
                ...action.payload
            }
        }
        case SET_MODAL_DELETE_ORDER: return {
            ...state,
            modalDeleteOrder: {
                ...state.modalDeleteOrder,
                ...action.payload
            }
        }


        default: return state;

    }
}

export default generalReducer;