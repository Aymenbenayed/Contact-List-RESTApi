import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_USERS_LOAD,
  GET_USERS_SUCESS,
  GET_USERS_FAIL,
  GET_USER_LOAD,
  GET_USER_SUCESS,
  GET_USER_FAIL,
  UPLOAD_ERROR,
  UPLOAD_PICTURE
} from "../Constants/user";
import axios from "axios";

export const register = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/api/user/signup", newUser);
    dispatch({ type: REGISTER_USER, payload: result.data }); //msg , token , user
    history.push("/Account");
  } catch (error) {
    console.log(error.response.data.errorrs);
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/signin", user);
    dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
    history.push("/Account");
  } catch (error) {
    // error.response.data.errors.map((el) =>
    //   setTimeout(function () {
    //     alert(el.msg);
    //   }, 3000)
    // );
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/user/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const videErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_LOAD });
  try {
    const res = await axios.get("/api/user");
    dispatch({ type: GET_USERS_SUCESS, payload: res.data.listUsers });
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error });
    console.log(error);
  }
};

// delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/delete/${id}`);
    console.log(id);
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};

//edit user
export const editUser = (id, newUser) => async (dispatch) => {
  try {
    await axios.put(`/api/user/${id}`, newUser);
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (_id) => async (dispatch) => {
  dispatch({ type: GET_USER_LOAD });
  try {
    const res = await axios.get(`/api/user/${_id} `);
    dispatch({ type: GET_USER_SUCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error });
    console.log(error);
  }
};

