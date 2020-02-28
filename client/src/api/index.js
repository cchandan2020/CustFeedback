import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertFeedback = payload => api.post(`/feedback`, payload)
export const getAllFeedbacks = () => api.get(`/feedbacks`)
// add chart api later 

const apis = {
    insertFeedback,
    getAllFeedbacks,
    
}

export default apis