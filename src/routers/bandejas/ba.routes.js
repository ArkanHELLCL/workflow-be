import { Router } from 'express'
import { getBA, getBAid, postBA, patchBAid } from '../../controllers/bandejas/ba.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandejas/archivados', getBA)

router.get('/bandejas/archivados/:id', getBAid)

router.post('/bandejas/archivados', postBA)

router.patch('/bandejas/archivados/:id', patchBAid)

export default router