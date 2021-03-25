
import axios from 'axios'
import {GET_USERS_FAIL,GET_USERS_LOAD,GET_USERS_SUCESS,GET_USER,TOGGLE_TRUE,TOGGLE_FALSE} from '../Constants/ActionsTypes'


//get all users
export const getUsers = () => async (dispatch) => {
    dispatch({type:GET_USERS_LOAD})
    try {
        const res = await axios.get("/api/users/")
            dispatch({type: GET_USERS_SUCESS,payload:res.data.listUsers})
    } catch (error) {
        dispatch({type:GET_USERS_FAIL,payload:error})
        console.log(error)
    }
}

//delete user 
export const deleteUser = (id) => async (dispatch) => {
try {
    await axios.delete(`/api/users/${id}`)
    dispatch(getUsers())
} catch (error) {
console.log(error)
}}

//add user 
export const addUser = (newUser) => async (dispatch) => {
    try {
        await axios.post("/api/users/",newUser)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
    }}


//edit user

export const editUser = (id,newUser) => async (dispatch) => {
    try {
        await axios.put(`/api/users/${id}`,newUser)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
    }}

    //get one user

export const getUser = (id) => async (dispatch) => {
    /* dispatch({type:GET_USERS_LOAD}) */
    try {
        const res = await axios.get(`/api/users/${id}`)
        //console.log(res)
            dispatch({type: GET_USER,payload:res.data.userToFind})
    } catch (error) {
        console.log(error)
    }}



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
        