import { Router } from 'express'
import { getBO, getBOid, postBO, putBOid } from '../controllers/bo.controllers.js'

const router = Router()

//Registros de bandeja de entrada del usuario
router.get('/bandeja-de-otros', getBO)

router.get('/bandeja-de-otros/:id', getBOid)

router.post('/bandeja-de-otros', postBO)

router.patch('/bandeja-de-otros/:id', putBOid)

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