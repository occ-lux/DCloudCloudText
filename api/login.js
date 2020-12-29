import request from '../request/request.js'

// login
export function userLogin(data) {
    return request.gotocloud('userLogin', data);
}

// register
export function register(data) {
    return request.gotocloud('addUser', data);
}