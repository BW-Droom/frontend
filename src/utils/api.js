import axios from 'axios';

export function getToken() {
    return localStorage.getItem("token")
}

export default function() {
    return axios.create({
        baseURL: "https://droombackend.herokuapp.com/",
        headers: {
            Authorization: localStorage.getItem('token')
        },
    })
}