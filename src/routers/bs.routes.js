import { Router } from 'express'
import { getBS, getBSid, postBS, patchBSid } from '../controllers/bs.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-de-salida', getBS)

router.get('/bandeja-de-salida/:id', getBSid)

router.post('/bandeja-de-salida', postBS)

router.patch('/bandeja-de-sañida/:id', patchBSid)

export default router