import Mock, { Random } from "mockjs";
import { BASE_URL } from '@/api/http/config'

// 模拟向后端请求数据的延迟响应
Mock.setup({
  timeout: Random.range(10, 500), 
});
// 使用方法
// Mock.mock("接口地址", {
// 	err: 0,
// 	msg: "",
// 	data: {},
// })
// 正则匹配 /v1/api/menu/:id   =>  RegExp("/v1/api/menu" + ".*")  =>  Mock.mock(RegExp("/v1/api/menu" + ".*"), "", () => {})
// Mock.mock("接口地址", "post",(opt) => {
// 	return {
// 		err: 0,
// 		msg: "",
// 		data: {},
// 	}
// })


Mock.mock(BASE_URL + "/demo", {
	err: 0,
	msg: "",
	data: {
    say: "hello, @cname"
  },
})