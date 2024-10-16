import jwt from 'jsonwebtoken'
import connection from '../database/db.js'
//import { validateReq, validatePartialReq } from '../schemas/requerimientos.js'

//Bandeja de entrada
export const getOrdenesdeCompra = async (req, res) => {
    // Crear schema para validar los datos de entrada
    const token = req.cookies.access_token
    if(!token){
        res.status(401).json({"error":401,message:"No autorizado"});
        return;
    }
    /*const { PageNumber, RowsOfPage } = req.query
    if(!PageNumber || !RowsOfPage){
        res.status(404).json({"error":404,message:"Recurso no encontrado"});
        return;
    }*/
    const  { repFechaDesde, repFechaHasta, repUsrId } = req.query
    const repAnio = repFechaDesde.$y
    const repMes = repFechaDesde.$M + 1

    console.log('ru', repFechaDesde, repFechaHasta, repUsrId)
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
                "id" : "ru",
                "columns" : [
                    {
                        "field": "id"                
                    },
                    {
                        "field": "REQ_Id",
                        "headerName": "Req",
                        "type": "number",
                        "width": 70
                    },
                    {
                        "field": "REQ_Descripcion",
                        "headerName": "Descripción",
                        "width": 200
                    },
                    {
                        "field": "REQ_UsuarioEdit",
                        "headerName": "Creado",
                        "width": 100
                    },
                    {
                        "field": "REQ_FechaEdit",
                        "headerName": "Creación(1)",
                        "width": 100
                    },
                    {
                        "field": "DRE_FechaEdit",
                        "headerName": "Apr. DAF(2)",
                        "width": 100
                    },
                    {
                        "field": "DRE_FechaDifCreacion",
                        "headerName": "(1-2)",
                        "type": "number",
                        "width": 50
                    },
                    {
                        "field": "DRE_FechaEditAnterior",
                        "headerName": "Rec. DAF(3)",
                        "width": 100
                    },
                    {
                        "field": "DRE_UsuarioEdit",
                        "headerName": "Aprobado",
                        "width": 100
                    },
                    {
                        "field": "DRE_FechaDifAprobacion",
                        "headerName": "(2-3)",
                        "type": "number",
                        "width": 50
                    },
                    {
                        "field": "DRE_FechaCierre",
                        "headerName": "Cierre(4)",
                        "width": 100
                    },
                    {
                        "field": "DRE_FechaDifCierre",
                        "headerName": "(3-4)",
                        "type": "number",
                        "width": 75
                    },
                    {
                        "field": "DRE_UsuarioCierre",
                        "headerName": "Cerrado",
                        "width": 100
                    }
                ],                
                "rows": null
            }  

            const pool = await connection()
            const result = await pool
                    .request()
                    .input("PageNumber", PageNumber)
                    .input("RowsOfPage", RowsOfPage)
                    .input("usrId",usrId)
                    .input("usrIdentificadorSender",usrIdentificadorSender)
                    .query("exec [spInformeDiasxUsuarioo_Listar] @repUsrId, @repAnio, @repMes, @usrId, @usrIdentificadorSender");
            
            data.rows = result.recordset
            res.status(200).json(data)        

    }catch (error) {
        if(error.message === 'No autorizado'){
            res.status(401).json({"id":"ru","error":401,message:error.message});
            return;
        }
        res.status(500).json({"id":"ru","error":500,message:error.message});
    }
}