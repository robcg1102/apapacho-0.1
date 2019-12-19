import axios from 'axios'

const baseURL = 'https://powerful-spire-47108.herokuapp.com'
//'http://localhost:3000'

const service = axios.create({
  baseURL,
  withCredentials: true
})

  const COMMENT_SERVICE = {
    comment: data => {
      return service.post('/create', data)
    },
    getComments: () => {
      return service.get('/comments')
    }
}

export default COMMENT_SERVICE