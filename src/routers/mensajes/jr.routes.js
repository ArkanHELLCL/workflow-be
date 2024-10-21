import { Router } from 'express'
import { getJR, getJRid, postJR, patchJRid } from '../../controllers/mensajes/jr.controllers.js'

const router = Router()

router.get('/mensajes/entrada', getJR)

router.get('/mensajes/entrada/:id', getJRid)

router.post('/mensajes/entrada', postJR)

router.patch('/mensajes/entrada/:id', patchJRid)

export default router