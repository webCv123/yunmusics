import axios from 'axios'
export const baseURL = 'http://www.codeman.ink:3000'
import {ElLoading} from 'element-plus'
let loadingInstance=null
const instance = axios.create({
    // baseURL:'http://localhost:8080',
    baseURL,
    timeout:2000
})
// 创建请求拦截器
instance.interceptors.request.use(config=> {
    loadingInstance=ElLoading.service({fullscreen:true})
    return config
},err=> new Promise.reject(err))

// 创建响应拦截器
instance.interceptors.response.use(res=> {
    loadingInstance.close()
    return res.data
}, err=>{
        // const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        // router.push('/Gologin?redirectUrl='+fullPath)//登录后回跳页面
    // return new Promise.reject(err)
})
export default (url, method, data)=>{
    // 负责发请求，请求地址，请求方式，提交的数据
    // data在请求体里，params在地址栏里
    return instance({
        url,
        method,
        // get请求需要使用params传参 post需要使用data传参，所以要动态匹配传参主体
        [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    })
}