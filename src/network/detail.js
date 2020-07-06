import request from './request'

export default function getDetailData(){
    return request ({
        url:'/mock/detail.json',
    })
}