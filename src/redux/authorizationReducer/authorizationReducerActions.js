import {SET_AUTHORIZATION} from './authorizationReducerTypes'


export const setAuthorization = (payload) => {
  return {
    type: SET_AUTHORIZATION,
    payload,
  }
}



