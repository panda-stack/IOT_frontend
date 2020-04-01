import * as actionTypes from '../actions/actionTypes'

const initialState = {
  show_item:0,
  loading:false,
  maxDate:new Date()
}
const show_capacity = (state,action) =>{
    
    return {
        show_item:1,
        maxDate: state.maxDate
    }
}
const show_loading = (state,action) =>{
    return {
        show_item:2,
        maxDate: state.maxDate
    }
}
const show_chronology = (state,action) =>{
    return {
        show_item:3,
        maxDate: state.maxDate
    }
}
const send_date = (state,action) => {
    
    return {
        maxDate: action.maxDate
    }
}
const reducer = (state=initialState, action) =>{
    
    switch(action.type){
        case actionTypes.SHOW_CAPACITY: return show_capacity(state,action);
        case actionTypes.SHOW_LOADING: return show_loading(state,action);
        case actionTypes.SHOW_CHRONOLOGY: return show_chronology(state,action);   
        case actionTypes.SEND_DATE: return send_date(state,action);
        default:
            return state;     
    }
}
export default reducer;