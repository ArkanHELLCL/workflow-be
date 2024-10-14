import { Router } from 'express'
import { getPhotoid } from '../controllers/photo.controllers.js'

const router = Router()

router.get('/photo/:id', getPhotoid)

export default router
