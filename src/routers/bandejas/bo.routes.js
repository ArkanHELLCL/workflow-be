import { Router } from 'express'
import { getBO, getBOid, postBO, patchBOid } from '../../controllers/bandejas/bo.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandejas/otros', getBO)

router.get('/bandejas/otros/:id', getBOid)

router.post('/bandejas/otros', postBO)

router.patch('/bandejas/otros/:id', patchBOid)

export default router