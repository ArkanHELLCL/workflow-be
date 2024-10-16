import { Router } from 'express'
import { getProveedores, getProveedoresid, postProveedores, patchProveedoresid } from '../controllers/proveedores.controllers.js'

const router = Router()

// Registros de mantenodor de Proveedores
router.get('/mantenedores/proveedores', getProveedores)

router.get('/mantenedores/proveedores/:id', getProveedoresid)

router.post('/mantenedores/proveedores', postProveedores)

router.patch('/mantenedores/proveedores/:id', patchProveedoresid)

export default router
