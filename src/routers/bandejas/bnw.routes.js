import { Router } from 'express'
import { getBNW, getBNWid, postBNW, patchBNWid } from '../../controllers/bandejas/bnw.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandejas/antiguos/workflowv1', getBNW)

router.get('/bandejas/antiguos/workflowv1/:id', getBNWid)

router.post('/bandejas/antiguos/workflowv1', postBNW)

router.patch('/bandejas/antiguos/workflowv1/:id', patchBNWid)

export default router