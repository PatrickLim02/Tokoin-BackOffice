import { SET_ASIDE, SET_MODAL_REJECT_ORDER, SET_MODAL_PAYMENT_RECEIPT, SET_MODAL_DELETE_ORDER } from './generalReducerTypes'


export const setAside = (payload) => {
  return {
    type: SET_ASIDE,
    payload,
  }
}

export const setModalRejectOrder = (payload) => {
  return {
    type: SET_MODAL_REJECT_ORDER,
    payload,
  }
}

export const setModalPaymentReceipt = (payload) => {
  return {
    type: SET_MODAL_PAYMENT_RECEIPT,
    payload,
  }
}

export const setModalDeleteOrder = (payload) => {
  return {
    type: SET_MODAL_DELETE_ORDER,
    payload,
  }
}
