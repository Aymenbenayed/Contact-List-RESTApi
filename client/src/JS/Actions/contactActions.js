
import axios from 'axios'
import {GET_CONTACTS_FAIL,GET_CONTACTS_LOAD,GET_CONTACTS_SUCESS,GET_CONTACT,TOGGLE_TRUE,TOGGLE_FALSE} from '../Constants/ActionsTypes'


//get all CONTACTS
export const getContacts = () => async (dispatch) => {
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        const res = await axios.get("/api/contacts/")
            dispatch({type: GET_CONTACTS_SUCESS,payload:res.data.listContacts})
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL,payload:error})
        console.log(error)
    }
}

//delete user 
export const deleteContact = (id) => async (dispatch) => {
try {
    await axios.delete(`/api/contacts/${id}`)
    dispatch(getContacts())
} catch (error) {
console.log(error)
}}

//add user 
export const addContact = (newContact,history,contact) => async (dispatch) => {
    try {
        await axios.post("/api/contacts/",newContact)
        dispatch(getContacts());
        history.push("/Listcontacts")
    } catch (error) {
        dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data.errors });
        console.log(error)
    }}


//edit user

export const editContact = (id,newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contacts/${id}`,newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }}
    //get one user

export const getContact = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/contacts/${id}`)
            dispatch({type: GET_CONTACT,payload:res.data.contactToFind})
            console.log(res.data)
    } catch (error) {
        console.log(error)}}

    //toggle true 
    export const toggleTrue = () =>{
        return{
            type: TOGGLE_TRUE
        }}

    //toggle false


    export const toggleFalse = () =>{
        return{
            type: TOGGLE_FALSE
        }}
        
        export const videErrors = () => {
            return {
              type: "VIDE_ERRORS",
            };
          };
          