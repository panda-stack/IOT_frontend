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
export const show_success = (img_data) => {
    return {
        type: actionTypes.SHOW_SUCCESS,
      
        img_data:img_data,
        loading:false
    }
}
export const send_date = (max_date) => {
    
    return {
        type: actionTypes.SEND_DATE,
        maxDate: max_date
    }
}

export const upload_start = () =>{
    
    return {
        type:actionTypes.UPLOAD_START
    }
}
export const upload_success = () =>{
   
    return {
        type:actionTypes.UPLOAD_SUCCESS,
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
      
        dispatch(upload_start())
        axios.post('http://127.0.0.1:8000/api/upload/', formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
           
            dispatch(send_date(res.data))
            dispatch(upload_success())
        })
        .catch(err => {
            
            console.log(err)
        })
    }

}
export const show_heatmap = (show_item, date) => {
    
    return dispatch => {
        dispatch(show_start());
        axios.post('http://127.0.0.1:8000/api/heatmap/', {
            show_item: show_item,
            date: date
        })
        .then(res => {
            dispatch(show_success(res.data))
        })
        .catch(err => {
            dispatch(show_fail(err))
        })
    }
}