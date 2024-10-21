import { Router } from 'express'
import { postLogin } from '../../controllers/usuario/login.controllers.js'

const router = Router()

router.post('/usuario/login', postLogin)

export default router
