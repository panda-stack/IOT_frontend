import * as actionTypes from './actionTypes'
import axios from 'axios'

export const show_capacity = (dispatch) => {
    var action = {
        type: actionTypes.SHOW_CAPACITY
    }
    dispatch(action)
}
export const show_loading = (dispatch) => {
    var action = {
        type: actionTypes.SHOW_LOADING
    }
    dispatch(action)
}
export const show_chronology = (dispatch) => {
    var action = {
        type: actionTypes.SHOW_CHRONOLOGY
    }
    dispatch(action)
}
export const show_start = () => {
    return {
        type: actionTypes.SHOW_START,
        loading: true
    }
}
export const show_success = () => {
    return {
        type: actionTypes.SHOW_SUCCESS,
        loading: false
    }
}
export const send_date = (max_date) => {
    return {
        type: actionTypes.SEND_DATE,
        maxDate: max_date
    }
}
export const show_fail = error => {
    return {
        type: actionTypes.SHOW_FAIL,
        error: error,
        loading: false
    }
}
export const file_upload = (formData) => {
    return dispatch => {
        axios.post('http://127.0.0.1:8000/api/upload/', formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            
            dispatch(send_date(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    }

}
export const show_heatmap = (show_item, date) => {
    console.log(show_item, date)
    return dispatch => {
        dispatch(show_start);
        axios.post('http://127.0.0.1:8000/api/heatmap/', {
            show_item: show_item,
            date: date
        })
            .then(res => {
                console.log(res.data)
                dispatch(show_success)
            })
            .catch(err => {
                dispatch(show_fail(err))
            })
    }
}