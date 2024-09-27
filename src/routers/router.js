import express from 'express'
import * as GetsData from './gets/index.js'

const router = express.Router()

//Registros de bandeja de entrada del usuario
router.get('/BandejaDeEntrada', (req, res) => {
    res.send(GetsData.BandejaEntrada(req, res))
})

//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', function (req, res) {
    res.status(404).json({"error":404,message:"No se encontró la ruta solicitada"});
});
export default router