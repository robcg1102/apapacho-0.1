import axios from 'axios'

const baseURL = 'http://localhost:3000'

const service = axios.create({
  baseURL,
  withCredentials: true
})

  const VISIT_SERVICE = {
    createVisit: data => {
      return service.post('/createvisit', data)
    },
    getVisits: () => {
      return service.get('/visits')
    }
}

export default VISIT_SERVICE