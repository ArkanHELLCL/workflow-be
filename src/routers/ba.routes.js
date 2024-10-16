import { Router } from 'express'
import { getBA, getBAid, postBA, patchBAid } from '../controllers/ba.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-de-archivados', getBA)

router.get('/bandeja-de-archivados/:id', getBAid)

router.post('/bandeja-de-archivados', postBA)

router.patch('/bandeja-de-archivados/:id', patchBAid)

export default router