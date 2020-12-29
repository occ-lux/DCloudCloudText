import request from '../request/request.js'

// getUserInfo
export function userInfo(data) {
    return request.gotocloud('userInfo', data);
}

// updataUserinfo
export function updataUserinfo(data) {
    return request.gotocloud('updataUserinfo', data);
}