// http.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BASE_URL, TIME_OUT } from './config'

const request = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    validateStatus() {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true
    },
})

// 请求拦截器
request.interceptors.request.use((config: AxiosRequestConfig) => {
    //获取token，并将其添加至请求头中
    let token = localStorage.getItem('token')
    if (token) {
        config.headers = { ...config.headers, ...{ Authorization: token } }
    }
    return config
}, (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '服务器异常，请联系管理员!'
    return Promise.resolve(error)
})

// 响应拦截器
request.interceptors.response.use((response: AxiosResponse):HttpResponse => {
    const status = response.status
    let msg = ''
    if (status < 200 || status >= 300) {
        // 处理http错误，抛到业务代码
        response.data = {
            err: status,
            msg: showStatus(status),
            data: []
        }
        // if (typeof response.data === 'string') {
        //     response.data = { msg }
        // } else {
        //     response.data.msg = msg
        // }
        console.log(response)
        alert(showStatus(status))
    }
    return response.data
}, (error) => {
    if (axios.isCancel(error)) {
        console.log('repeated request: ' + error.message)
    } else {
        // handle error code
        // 错误抛到业务代码
        error.data = {}
        error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员!'
        // ElMessage.error(error.data.msg)
        alert(error.data.msg);
    }
    return Promise.reject(error)
})

const showStatus = (status: number) => {
    let message = ''
    switch (status) {
        case 400:
            message = '请求错误(400)'
            break
        case 401:
            message = '未授权，请重新登录(401)'
            break
        case 403:
            message = '拒绝访问(403)'
            break
        case 404:
            message = '请求出错(404)'
            break
        case 408:
            message = '请求超时(408)'
            break
        case 500:
            message = '服务器错误(500)'
            break
        case 501:
            message = '服务未实现(501)'
            break
        case 502:
            message = '网络错误(502)'
            break
        case 503:
            message = '服务不可用(503)'
            break
        case 504:
            message = '网络超时(504)'
            break
        case 505:
            message = 'HTTP版本不受支持(505)'
            break
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员!`
}

/**
 * 
 * 接口响应格式
 * ```
 * {
 *     err: 0,
 *     msg: 'ok',
 *     data: [] | {}
 * }
 * ```
 * @return err 响应状态 0-正常，其他值为异常
 * @return msg 描述内容
 * @return data 后端返回的数据
 *
 *
 */
export interface HttpResponse {
    err: number;
    msg: string;
    data: unknown[] | {}
}
export default request