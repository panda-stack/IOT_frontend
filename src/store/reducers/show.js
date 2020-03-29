import * as actionTypes from '../actions/actionTypes'

const initialState = {
  show_item:0
}
const show_capacity = (state,action) =>{
    
    return {
        show_item:1
    }
}
const show_loading = (state,action) =>{
    return {
        show_item:2
    }
}
const show_chronology = (state,action) =>{
    return {
        show_item:3
    }
}
const reducer = (state=initialState, action) =>{
    
    switch(action.type){
        case actionTypes.SHOW_CAPACITY: return show_capacity(state,action);
        case actionTypes.SHOW_LOADING: return show_loading(state,action);
        case actionTypes.SHOW_CHRONOLOGY: return show_chronology(state,action);   
        default:
            return state;     
    }
}
export default reducer;