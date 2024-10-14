import { Router } from 'express'
import { getBF, getBFid, postBF, patchBFid } from '../controllers/bf.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-de-finalizados', getBF)

router.get('/bandeja-de-finalizados/:id', getBFid)

router.post('/bandeja-de-finalizados', postBF)

router.patch('/bandeja-de-finalizados/:id', patchBFid)

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