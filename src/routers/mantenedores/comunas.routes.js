import { Router } from 'express'
import { getComunas, getComunasid, postComunas, patchComunasid } from '../../controllers/mantenedores/comunas.controllers.js'

const router = Router()

// Registros de mantenodor de Comunas
router.get('/mantenedores/comunas', getComunas)

router.get('/mantenedores/comunas/:id', getComunasid)

router.post('/mantenedores/comunas', postComunas)

router.patch('/mantenedores/comunas/:id', patchComunasid)

export default router
