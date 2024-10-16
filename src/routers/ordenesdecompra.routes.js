import { Router } from 'express'
import { getOrdenesdeCompra } from '../controllers/ordenesdecompra.controllers.js'

const router = Router()

// Registros de mantenodor de OrdenesdeCompra
router.get('/reportes/ordenes-de-compra', getOrdenesdeCompra)

export default router
