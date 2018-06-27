import axios from 'axios'

export default (url, options={}) => {
    let commonOptions = {
        baseURL: 'http://localhost:8098',
        // baseURL: 'http://120.77.178.13:8098',
        timeout: 5000,
        withCredentials: true
    };
    let commonHeaders = {
        'Content-Type': 'application/json',
        'uid': '12365263'
    };
    options = {...commonOptions, ...options};
    options.headers = {
        ...commonHeaders,
        ...(options.headers || {})
    };

    return axios(url, options)
        .then( response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            const error = new Error(response.statusText);
            error.msg = {
                data: response.data,
                status: response.status,
                statusText: response.statusText
            };
            throw error;
        })
        .then( response => {
            return response;
        })
        .then( ({data}) => (data) )
        .catch( ({msg}) => (msg) );
}