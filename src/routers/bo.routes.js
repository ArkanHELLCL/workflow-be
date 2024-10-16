import { Router } from 'express'
import { getBO, getBOid, postBO, patchBOid } from '../controllers/bo.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-de-otros', getBO)

router.get('/bandeja-de-otros/:id', getBOid)

router.post('/bandeja-de-otros', postBO)

router.patch('/bandeja-de-otros/:id', patchBOid)

export default router