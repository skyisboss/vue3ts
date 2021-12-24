import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CVRequestInterceptors {
  requestInterceptors: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch: (error: any) => any
  responseInterceptors: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch: (error: any) => any
}

export interface CVRequestConfig extends AxiosRequestConfig {
  // 自定义拦截器
  interceptors?: CVRequestInterceptors,
  // 是否显示Loading
  showLoading?: boolean
}



/**
 * 
 * 接口响应通过格式
 * @param status 响应状态
 * @param statusText 响应文本
 * @param data 后端返回的数据， err:0-正常 其他值为异常, msg:对应err的描述， data：具体返回的内容
 * 
 */

export interface HttpResponse {
  status: number;
  statusText: string;
  data: {
    err: number;
    msg: string;
    data: any
  }
}

