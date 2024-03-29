import { verifyJwt } from 'api/services/jwt'

export default (params) => ([
  (req, res, next) => {
    if (req.header('Authorization') || req.header('authorization')) {
      const parts = req.header('Authorization').split(' ');
      const token = parts[1]

      if (token) {
        return verifyJwt(token, (err, payload) => {
          if (!err) { req.payload = payload }
          next()
        })
      }
    }
    next()
  }
])
