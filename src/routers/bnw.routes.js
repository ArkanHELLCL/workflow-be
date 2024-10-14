import { Router } from 'express'
import { getBNW, getBNWid, postBNW, patchBNWid } from '../controllers/bnw.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-antiguos-workflowv1', getBNW)

router.get('/bandeja-antiguos-workflowv1/:id', getBNWid)

router.post('/bandeja-antiguos-workflowv1', postBNW)

router.patch('/bandeja-antiguos-workflowv1/:id', patchBNWid)

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