import { Router } from 'express'
import { getItemsListaDesplegable, getItemsListaDesplegableid, postItemsListaDesplegable, patchItemsListaDesplegableid } from '../../controllers/mantenedores/itemlistadesplegable.controllers.js'

const router = Router()

// Registros de mantenodor de ItemsListaDesplegable
router.get('/mantenedores/items-lista-desplegable', getItemsListaDesplegable)

router.get('/mantenedores/items-lista-desplegable/:id', getItemsListaDesplegableid)

router.post('/mantenedores/items-lista-desplegable', postItemsListaDesplegable)

router.patch('/mantenedores/items-lista-desplegable/:id', patchItemsListaDesplegableid)

export default router
