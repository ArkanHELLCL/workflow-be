import { Router } from 'express'
import { getDiasporUsuario } from '../../controllers/reportes/diasporusuario.controllers.js'

const router = Router()

// Registros de mantenodor de DiasporUsuario
router.get('/reportes/dias-por-usuario', getDiasporUsuario)

export default router
