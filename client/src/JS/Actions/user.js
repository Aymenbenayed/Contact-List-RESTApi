import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
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
  