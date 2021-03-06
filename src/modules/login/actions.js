import { Config } from "../../config/Config";

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_RESPONSE = 'USER_LOGIN_RESPONSE';
export const LOGOUT = 'LOGOUT';

export const loginUser = (login, password) => {
    return dispatch => {
        dispatch({
          type: USER_LOGIN_REQUEST
        });

        return fetch(Config.backendBaseUrl + '/login', {
            method : 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                login,
                password
            })
        }).then(response  => response.json()).then(userInfo => {
            dispatch({
                type: USER_LOGIN_RESPONSE,
                userInfo
            });
        });
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        info: 'logout'
    }
}