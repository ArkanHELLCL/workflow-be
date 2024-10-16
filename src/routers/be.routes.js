import { Router } from 'express'
import { getBE, getBEid, postBE, patchBEid } from '../controllers/be.controllers.js'

const router = Router()

// Registros de bandeja de entrada del usuario
router.get('/bandeja-de-entrada', getBE)

router.get('/bandeja-de-entrada/:id', getBEid)

router.post('/bandeja-de-entrada', postBE)

router.patch('/bandeja-de-entrada/:id', patchBEid)

export default router
