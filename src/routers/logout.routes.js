import { Router } from 'express'
import { postLogout } from '../controllers/logout.controllers.js'

const router = Router()

router.post('/logout', postLogout)

export default router
