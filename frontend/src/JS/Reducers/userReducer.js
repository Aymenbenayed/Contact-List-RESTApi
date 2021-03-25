import {GET_USERS_FAIL,GET_USERS_LOAD,GET_USERS_SUCESS,GET_USER,TOGGLE_TRUE,TOGGLE_FALSE} from '../Constants/ActionsTypes'

const initState =  {
    users:[],
    error:[],
    loading: false,
    user:[],
    isEdit: false,
}

const userReducer = (state = initState,{type,payload}) => {
    switch(type){
        case GET_USERS_LOAD : return { ...state , loading : true }
        case GET_USERS_SUCESS : return {...state, loading : false , users:payload}
        case GET_USERS_FAIL : return {...state, loading : false , errors:payload}
        case GET_USER : return {...state, user:payload}
        case TOGGLE_TRUE : return {...state, isEdit:true} 
        case TOGGLE_FALSE : return {...state, isEdit:false}
        default : return state 
    }
}
export default userReducer