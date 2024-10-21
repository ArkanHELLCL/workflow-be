import { Router } from 'express'
import { getBNC, getBNCid, postBNC, patchBNCid } from '../../controllers/bandejas/bnc.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandejas/antiguos/compras', getBNC)

router.get('/bandejas/antiguos/compras/:id', getBNCid)

router.post('/bandejas/antiguos/compras', postBNC)

router.patch('/bandejas/antiguos/compras/:id', patchBNCid)

export default router