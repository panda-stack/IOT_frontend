import * as actionTypes from './actionTypes'

export const show_capacity = (dispatch) =>{
    var action = {
        type: actionTypes.SHOW_CAPACITY
    }
    dispatch(action)
}
export const show_loading = (dispatch) =>{
    var action =  {
        type:actionTypes.SHOW_LOADING
    }
    dispatch(action)
}
export const show_chronology = (dispatch) =>{
    var action = {
        type:actionTypes.SHOW_CHRONOLOGY
    }
    dispatch(action)
}
