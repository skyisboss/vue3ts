import { HttpResponse } from "../http";

export interface IDemo {
    /**
     * @param uri 请求地址
     */
    init(uri ?: string): Promise<HttpResponse> | undefined
}