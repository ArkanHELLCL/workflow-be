import { Router } from 'express'
import { getBF, getBFid, postBF, patchBFid } from '../controllers/bf.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-de-finalizados', getBF)

router.get('/bandeja-de-finalizados/:id', getBFid)

router.post('/bandeja-de-finalizados', postBF)

router.patch('/bandeja-de-finalizados/:id', patchBFid)

export default router