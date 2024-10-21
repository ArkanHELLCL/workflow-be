import { Router } from 'express'
import { postLogout } from '../../controllers/usuario/logout.controllers.js'

const router = Router()

router.post('/usuario/logout', postLogout)

export default router
