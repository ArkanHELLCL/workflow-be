import jwt from 'jsonwebtoken'
import connection from '../database/db.js'

//Bandeja de entrada
export const getBNW = async (req, res) => {
    // Crear schema para validar los datos de entrada
    const token = req.cookies.access_token
    if(!token){
        res.status(403).json({"error":401,message:"No autorizado"});
        return;
    }
    const { PageNumber, RowsOfPage } = req.query
    if(!PageNumber || !RowsOfPage){
        res.status(404).json({"error":404,message:"Recurso no encontrado"});
        return;
    }    

    //Rescatando datos del payload del token
    try {
        const datajwt = jwt.verify(token, process.env.JWT_SECRETO)        
        const { usrId, usrIdentificadorSender } = datajwt
        
        const data =  
            {
                "id" : "bnw",
                "registros": null
            }   

            const pool = await connection()
            const result = await pool
                    .request()
                    .input("PageNumber", PageNumber)
                    .input("RowsOfPage", RowsOfPage)
                    .input("usrId",usrId)
                    .input("usrIdentificadorSender",usrIdentificadorSender)
                    .query("exec spDatoRequerimientoBNWJSON_Listar @PageNumber, @RowsOfPage, @usrId, @usrIdentificadorSender");
            //data.find(el => el.id === 'bo').registros = result.recordset
            data.registros = result.recordset
            res.status(200).json(data)

    } catch (error) {
        res.status(500).json({"id":"bnw","error":500,message:error.message});
    }    
}

export const getBNWid = async (req, res) => {
    const { id } = req.params
    res.status(200).json({"message":"Obteniento datos de bandeja antiguos workflowv1 con id: " + id})
}

export const postBNW = async (req, res) => {
    // Ejemplo de validación de datos con zod
    // Se debe validar todos los campos que se reciben
    const result = await validateReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Guardando datos de bandeja antiguos workflowv1"})
}

export const putBNWid = (req, res) => {
    const { id } = req.params
    const result = validatePartialReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Actualizando datos de bandeja de antiguos workflowv1 con id: " + id})
}