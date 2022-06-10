
import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR, LOGOUT } from './auth.type';
import axios from 'axios';

export const login =(cred)=> (dispatch)=>{
    dispatch({type:LOGIN_LOADING})
    axios.post("https://reqres.in/api/login",{
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
    .then((r)=>{dispatch({type:LOGIN_SUCCESS,payload:r.data})})
    .catch((error)=>{dispatch({type:LOGIN_ERROR})})
}
export const logout =()=>(dispatch)=>({type:LOGOUT})