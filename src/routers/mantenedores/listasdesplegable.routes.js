import { Router } from 'express'
import { getListasDesplegable, getListasDesplegableid, postListasDesplegable, patchListasDesplegableid } from '../../controllers/mantenedores/listasdesplegable.controllers.js'

const router = Router()

// Registros de mantenodor de ListasDesplegable
router.get('/mantenedores/listas-desplegable', getListasDesplegable)

router.get('/mantenedores/listas-desplegable/:id', getListasDesplegableid)

router.post('/mantenedores/listas-desplegable', postListasDesplegable)

router.patch('/mantenedores/listas-desplegable/:id', patchListasDesplegableid)

export default router
