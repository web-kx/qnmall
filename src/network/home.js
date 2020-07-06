import request from "./request"


export default function getHomeMultidata() {
    return request({
        url: '/mock/index.json'
    })     
}