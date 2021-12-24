import http, { HttpResponse } from "../http";


export interface Methods {
    
    /**
     * demo请求
     */
    init: () => Promise<HttpResponse | undefined>
}

/**
 * @method init demo请求
 */
export const demoAPI:Methods = {
    init: () => {
        return http.get('/demo')
    }
};