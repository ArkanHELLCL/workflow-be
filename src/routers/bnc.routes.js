import { Router } from 'express'
import { getBNC, getBNCid, postBNC, patchBNCid } from '../controllers/bnc.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-antiguos-compra', getBNC)

router.get('/bandeja-antiguos-compra/:id', getBNCid)

router.post('/bandeja-antiguos-compra', postBNC)

router.patch('/bandeja-antiguos-compra/:id', patchBNCid)

export default router