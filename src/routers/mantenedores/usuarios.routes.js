import { Router } from 'express'
import { getUsuarios, getUsuariosid, postUsuarios, patchUsuariosid } from '../../controllers/mantenedores/usuarios.controllers.js'

const router = Router()

// Registros de mantenodor de usuarios
router.get('/mantenedores/usuarios', getUsuarios)

router.get('/mantenedores/usuarios/:id', getUsuariosid)

router.post('/mantenedores/usuarios', postUsuarios)

router.patch('/mantenedores/usuarios/:id', patchUsuariosid)

export default router
