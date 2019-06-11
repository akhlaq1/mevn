import axios from 'axios'

const BASE_URL = "/api/";

export function get(url, params) {
    return new Promise(function (resolve, reject) {
        axios.get(BASE_URL + url, { params: params })
            .then(response => {
                if (response) {
                    resolve(response);
                }
                else {
                    reject();
                }
            })
            .catch(error => {

                if (error && error.response && error.response.data) {
                    reject(error.response.data);
                }

            });
    })
}

export function getPublicUser(url, params) {
    return new Promise(function (resolve, reject) {
        axios({
            method:'post',
            url:BASE_URL + url,
            data:{
                ...params
            }
            })
            .then(response => {
                if (response) {
                    resolve(response);
                }
                else {
                    reject();
                }
            })
            .catch(error => {

                if (error && error.response && error.response.data) {
                    reject(error.response.data);
                }

            });
    })
}

export function post(url, payload) {
    return new Promise(function (resolve, reject) {
        axios.post(BASE_URL + url, payload)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error.response);
            });
    })
}

export function put(url, payload) {
    return new Promise(function (resolve, reject) {
        axios.put(BASE_URL + url, payload)
            .then(response => {
                if (response.data) {
                    resolve(response);
                }
                else {
                    reject();
                }
            })
            .catch(error => {
                console.log(error);
                reject(error.response.data);
            });
    })
}

export function del(url, payload) {
    return new Promise(function (resolve, reject) {
        axios.delete(BASE_URL + url, { data: payload })
            .then(response => {
                if (response.data.success) {
                    resolve(response.data.data);
                }
                else {
                    reject();
                }
            })
            .catch(error => {
                reject(error.response.data);
            });
    })
}

export function postMultipart(url, formData) {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return new Promise(function (resolve, reject) {
        axios.post(BASE_URL + url, formData, config)
            .then(response => {
                if (response)
                    resolve(response);
                else {
                    reject();
                }
            })
            .catch(error => {
                reject(error.response.data);
            });
    })
}

export default {
    get,
    put,
    post,
    del,
    getPublicUser,
    postMultipart
}