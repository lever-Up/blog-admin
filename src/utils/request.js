import axios from 'axios'

export default (url, options={}) => {
    let commonOptions = {
        baseURL: 'http://localhost:8098',
        timeout: 5000
    };
    let commonHeaders = {
        'Content-Type': 'application/json'
    };
    options = {...commonOptions, ...options};
    options.headers = {
        ...commonHeaders,
        ...(options.headers || {})
    };

    return axios(url, options)
}