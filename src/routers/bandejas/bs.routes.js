import { Router } from 'express'
import { getBS, getBSid, postBS, patchBSid } from '../../controllers/bandejas/bs.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandejas/salida', getBS)

router.get('/bandejas/salida/:id', getBSid)

router.post('/bandejas/salida', postBS)

router.patch('/bandejas/salida/:id', patchBSid)

export default router