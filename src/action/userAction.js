import Axios from "axios"
import {LOGIN, LOGIN_START, LOGIN_END,KEEP_LOGIN, KEEP_LOGIN_START, KEEP_LOGIN_END,LOGIN_ERROR,LOG_OUT, URL} from "./helper"
import AsyncStorage from '@react-native-community/async-storage';

export const LoginAction = (body) =>{
    return async(dispatch)=>{
        try {
            console.log("dispatch : ",body.username)
            dispatch({type: LOGIN_START})

            // const res = await Axios.post(URL + "/api/login", body)
            // console.log(res.data)
            dispatch({type: LOGIN, payload: body.username})

            await AsyncStorage.setItem("username", body.username)

            dispatch({type: LOGIN_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
            dispatch({type: LOGIN_ERROR, payload: error.response.data})
        }
    }
}

export const keepLogin = ()=>{
    return async(dispatch)=>{
        try {
            dispatch({type: KEEP_LOGIN_START})

            const username = await AsyncStorage.getItem("username")
            if(!username){
                dispatch({type: KEEP_LOGIN_END})
                return
            }

            // console.log(token)
            // const res = await Axios.post(URL + "/api/keeplogin", {token})
            dispatch({type: KEEP_LOGIN, payload: username})

            dispatch({type: KEEP_LOGIN_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
            dispatch({type: KEEP_LOGIN_END})
        }
    }
}

export const onUserLogout = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem('username')
        dispatch({ type: LOG_OUT })
    }
}