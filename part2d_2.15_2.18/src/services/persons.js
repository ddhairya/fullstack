import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
    //return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl,newObject)
    return request.then(response => response.data)
}

const update = (newObject, id) => {
    const request = axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(response => response.data)
}

const recordDel = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    recordDel: recordDel
}