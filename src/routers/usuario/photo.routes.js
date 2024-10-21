import { Router } from 'express'
import { getPhotoid } from '../../controllers/usuario/photo.controllers.js'

const router = Router()

router.get('/usuario/photo/:id', getPhotoid)

export default router
