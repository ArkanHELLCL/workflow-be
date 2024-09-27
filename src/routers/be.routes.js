import { Router } from 'express'
import { getBE, getBEid, postBE, putBEid } from '../controllers/be.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-de-entrada', getBE)

router.get('/bandeja-de-entrada/:id', getBEid)

router.post('/bandeja-de-entrada', postBE)

router.put('/bandeja-de-entrada/:id', putBEid)

/*router.delete('/bandeja-de-entrada/:id', (req, res) => {
    res.json({"message":"Eliminando datos de bandeja de entrada con id: "+req.params.id})
})*/

//The 404 Route (ALWAYS Keep this as the last route)
/*router.get('*', function (req, res) {
    res.status(404).json({"error":404,message:"No se encontró la ruta solicitada"});
});
router.post('*', function (req, res) {
    res.status(404).json({"error":404,message:"No se encontró la ruta solicitada"});
});
router.put('*', function (req, res) {
    res.status(404).json({"error":404,message:"No se encontró la ruta solicitada"});
});*/

export default router