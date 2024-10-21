import { Router } from 'express'
import { getBF, getBFid, postBF, patchBFid } from '../../controllers/bandejas/bf.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandejas/finalizados', getBF)

router.get('/bandejas/finalizados/:id', getBFid)

router.post('/bandejas/finalizados', postBF)

router.patch('/bandejas/finalizados/:id', patchBFid)

export default router