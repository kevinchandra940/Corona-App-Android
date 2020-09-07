import {LOGIN, LOGIN_END, LOGIN_START, LOGIN_ERROR, KEEP_LOGIN, KEEP_LOGIN_END, KEEP_LOGIN_START, LOG_OUT} from "../action/helper"

const INITIAL_STATE ={
    user_id: null,
    username: "",
    email: "",
    role: "",
    status: null,
    token: "",
    loading: false,
    error: false,
    authloading: false
}

const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case LOGIN:
            return{...state,
                username: action.payload
                // user_id: action.payload.user_id,
                // username: action.payload.username,
                // email: action.payload.email,
                // role: action.payload.role,
                // status: action.payload.status,
                // token: action.payload.tokens
            }
            case LOGIN_START:
                return{
                    ...state,
                    loading: true
                }
            case LOGIN_END:
                return{
                    ...state,
                    loading: false            
                }
            case LOGIN_ERROR:
                return{
                    ...state,
                    loading: false,
                    error: action.payload            
                }
            case KEEP_LOGIN_START:
                return { ...state, authloading: true}
            case KEEP_LOGIN_END:
                return {...state, authloading: false}
            case KEEP_LOGIN:
                return{...state,
                        username: action.payload
                        // user_id: action.payload.user_id,
                        // username: action.payload.username,
                        // email: action.payload.email,
                        // role: action.payload.role,
                        // status: action.payload.status,
                        // token: action.payload.token
                }
            case LOG_OUT:
                return {INITIAL_STATE}
            default:
                return state
    }
}

export default userReducer