import { Router } from 'express'
import { getBE, getBEid, postBE, patchBEid } from '../../controllers/bandejas/be.controllers.js'

const router = Router()

// Registros de bandeja de entrada del usuario
router.get('/bandejas/entrada', getBE)

router.get('/bandejas/entrada/:id', getBEid)

router.post('/bandejas/entrada', postBE)

router.patch('/bandejas/entrada/:id', patchBEid)

export default router
