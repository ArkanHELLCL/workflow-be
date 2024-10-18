import { Router } from 'express'
import { getJR, getJRid, postJR, patchJRid } from '../controllers/jr.controllers.js'

const router = Router()

router.get('/bandeja-entrada-mensajes', getJR)

router.get('/bandeja-entrada-mensajes/:id', getJRid)

router.post('/bandeja-entrada-mensajes', postJR)

router.patch('/bandeja-entrada-mensajes/:id', patchJRid)

export default router