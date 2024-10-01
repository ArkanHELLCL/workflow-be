import connection from '../database/db.js'
import { validateReq, validatePartialReq } from '../schemas/requerimientos.js'

//Bandeja de entrada
export const getBE = async (req, res) => {
    // Crear schema para validar los datos de entrada
    const { PageNumber, RowsOfPage } = req.query
    const usrCod = 5
    const usrIdentificadorSender = "80B9DCB3-C59C-4A91-B6CE-C40907C7058B"
    const data =  
           [{
              "id" : "be",
              "registros": null
            }]
    
    //const { usrCod, usrIdentificadorSender } = req.body
    //{"usrCod":5,"usrIdentificadorSender":"80B9DCB3-C59C-4A91-B6CE-C40907C7058B"}
    //console.log(PageNumber, RowsOfPage, usrCod, usrIdentificadorSender, req.header)
    //if(!PageNumber || !RowsOfPage || !usrCod || !usrIdentificadorSender){
    if(!PageNumber || !RowsOfPage){
        res.status(404).json({"error":404,message:"Recurso no encontrado"});
        return;
    }    
    try {
        const pool = await connection()
        const result = await pool
                .request()
                .input("PageNumber", PageNumber)
                .input("RowsOfPage", RowsOfPage)
                .input("usrCod",usrCod)
                .input("usrIdentificadorSender",usrIdentificadorSender)
                .query("exec [spDatoRequerimientoBEJSON_Listar] @PageNumber, @RowsOfPage, @usrCod, @usrIdentificadorSender");
        data.find(el => el.id === 'be').registros = result.recordset
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({"error":500,message:error.message});
    }
}

export const getBEid = async (req, res) => {
    const { id } = req.params
    res.status(200).json({"message":"Obteniento datos de bandeja de salida con id: " + id})
}

export const postBE = async (req, res) => {
    // Ejemplo de validación de datos con zod
    // Se debe validar todos los campos que se reciben
    const result = await validateReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Guardando datos de bandeja de entrada"})
}

export const putBEid = (req, res) => {
    const { id } = req.params
    const result = validatePartialReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Actualizando datos de bandeja de entrada con id: " + id})
}