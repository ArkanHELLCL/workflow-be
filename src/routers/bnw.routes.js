import { Router } from 'express'
import { getBNW, getBNWid, postBNW, patchBNWid } from '../controllers/bnw.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-antiguos-workflowv1', getBNW)

router.get('/bandeja-antiguos-workflowv1/:id', getBNWid)

router.post('/bandeja-antiguos-workflowv1', postBNW)

router.patch('/bandeja-antiguos-workflowv1/:id', patchBNWid)

export default router