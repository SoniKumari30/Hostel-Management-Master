import Axios from 'axios'

const axios= Axios.create({
    baseURL:'http://localhost:3099'
})
export default axios