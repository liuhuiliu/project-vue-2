import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.baseURL = '//localhost:8080';
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com/';

window.request = request

export default function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
            let option = {
                url,
                method: type,
            }
            if (type.toLocaleLowerCase() === 'get') {
                option.params = data
            } else {
                option.data = data
            }
            if (localStorage.token) {
                axios.defaults.headers.common['Authorization'] = localStorage.token
            }

            // console.log(data)

            axios(option).then(res => {
                console.log(res.data)
                if (res.data.status === 'ok') {
                    if (res.data.token) {
                        localStorage.token = res.data.token
                    }
                    resolve(res.data)
                } else {
                    Message.error(res.data.msg)
                    reject(res.data)
                }

            }).catch(erro => {
                Message.error('网络异常')
                reject({ msg: '网络异常' })
            })
        }

    )
}