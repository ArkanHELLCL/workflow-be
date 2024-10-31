import jwt from 'jsonwebtoken'

export const checkToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRETO, function(err, decoded) {
            if (err) {
                reject(new Error('No autorizado'))
            }
            resolve(decoded)
        })
    })
}