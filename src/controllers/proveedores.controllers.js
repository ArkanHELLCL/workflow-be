import jwt from 'jsonwebtoken'
import connection from '../database/db.js'
//import { validateReq, validatePartialReq } from '../schemas/requerimientos.js'

//Bandeja de entrada
export const getProveedores = async (req, res) => {
    // Crear schema para validar los datos de entrada
    const token = req.cookies.access_token
    if(!token){
        res.status(401).json({"error":401,message:"No autorizado"});
        return;
    }
    const { PageNumber, RowsOfPage } = req.query
    if(!PageNumber || !RowsOfPage){
        res.status(404).json({"error":404,message:"Recurso no encontrado"});
        return;
    }    

    //Rescatando datos del payload del token
    try {
        let usrId
        let usrIdentificadorSender
        jwt.verify(token, process.env.JWT_SECRETO, function(err, decoded) {            
            if (err) {                
                throw new Error('No autorizado')
            }
            const { usrId : usr_Id, usrIdentificadorSender : usr_IdentificadorSender } = decoded
            usrId = usr_Id
            usrIdentificadorSender = usr_IdentificadorSender
        })
        const data =  
            {
                "id" : "mp",                
                "registros": null
            }  

            const pool = await connection()
            const result = await pool
                    .request()
                    .input("PageNumber", PageNumber)
                    .input("RowsOfPage", RowsOfPage)
                    .input("usrId",usrId)
                    .input("usrIdentificadorSender",usrIdentificadorSender)
                    .query("exec [spProveedoresJSON_Listar] @PageNumber, @RowsOfPage, @usrId, @usrIdentificadorSender");
            
            data.registros = result.recordset
            res.status(200).json(data)        

    }catch (error) {
        if(error.message === 'No autorizado'){
            res.status(401).json({"id":"mp","error":401,message:error.message});
            return;
        }
        res.status(500).json({"id":"mp","error":500,message:error.message});
    }
}

export const getProveedoresid = async (req, res) => {
    const { id } = req.params
    res.status(200).json({"message":"Obteniento datos del mantenedor de Proveedores con id: " + id})
}

export const postProveedores = async (req, res) => {
    // Ejemplo de validación de datos con zod
    // Se debe validar todos los campos que se reciben
    const result = await validateReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Guardando datos de Proveedor"})
}

export const patchProveedoresid = (req, res) => {
    const { id } = req.params
    const result = validatePartialReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Actualizando datos de Proveedor con id: " + id})
}