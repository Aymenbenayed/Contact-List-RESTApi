import {GET_CONTACTS_FAIL,GET_CONTACTS_LOAD,GET_CONTACTS_SUCESS,GET_CONTACT,TOGGLE_TRUE,TOGGLE_FALSE,VIDE_ERRORS,GET_CONTACT_LOAD} from '../Constants/ActionsTypes'

const initState =  {
    contacts:[],
    contact:[],
    errors:[],
    loading: false,
    isEdit: false,
}

const contactReducer = (state = initState,{type,payload}) => {
    switch(type){
        case GET_CONTACT_LOAD : return { ...state , loading : true }
        case GET_CONTACTS_LOAD : return { ...state , loading : true }
        case GET_CONTACTS_SUCESS : return {...state, loading : false , contacts:payload}
        case GET_CONTACTS_FAIL : return {...state, loading : false , errors: payload}
        case GET_CONTACT : return {...state,loading : false ,  contact:payload}
        case TOGGLE_TRUE : return {...state, isEdit:true} 
        case TOGGLE_FALSE : return {...state, isEdit:false}
        case VIDE_ERRORS:
      return { ...state, errors: [] };
        default : return state 
    }
}
export default contactReducer