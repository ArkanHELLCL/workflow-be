import jwt from 'jsonwebtoken'
import connection from '../../database/db.js'

//Bandeja de entrada
export const getJR = async (req, res) => {
    // Crear schema para validar los datos de entrada
    const token = req.cookies.access_token
    if(!token){
        res.status(401).json({"error":401,message:"No autorizado"});
        return;
    }
    const { PageNumber, RowsOfPage, menUsr } = req.query
    if(!PageNumber || !RowsOfPage ){
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
                "id" : "jr",
                "registros": null,
                "botones":[
                    [
                        {
                              "id" : "grp_1",
                              "nombre" : "Responder/Reenviar",
                              "descripcion" : "Responder/Reenviar",
                              "botones" : [
                                 {
                                    "id" : "btn_responder",
                                    "nombre" : "Responder",
                                    "descripcion" : ["Responder","Mensaje"],
                                    "type" : "button",
                                    "dialogo":"confirm",
                                    "titulo":"Responder mensaje",
                                    "mensaje":"¿Estas seguro de querer responder este mensaje?",
                                    "tooltiptext":"Responder este mensaje al remitente.",
                                    "btns.formulario":"frmWFMessages"
                                 },
                                 {
                                    "id" : "btn_reenviar",
                                    "nombre" : "Reenviar",
                                    "descripcion" : ["Reenviar","Mensaje"],
                                    "type" : "button",
                                    "dialogo":"confirm",
                                    "titulo":"Reenviar Mensaje",
                                    "mensaje":"¿Estas seguro de querer reenviar este mensaje a otro destinatario?",
                                    "tooltiptext":"Reenviar este mensaje a otro destinatario.",
                                    "btns.formulario":"frmWFMessages"
                                 }
                              ]
                        }
                    ],
                    [
                        {
                              "id" : "grp_2",
                              "nombre" :"Revisar",
                              "descripcion" : "Revisar",
                              "botones" : [
                                 {
                                    "id":"btn_retroceder",
                                    "nombre":"",
                                    "descripcion":["Ir al Mensaje","Anterior"],
                                    "type" : "button",
                                    "tooltiptext":"Ir al mensaje anterior",
                                    "btns.formulario":"frmWFMessages"
                                 },               
                                 {
                                    "id":"btn_avanzar",
                                    "nombre":"",
                                    "descripcion":["Ir al Mensaje","Siguiete"],
                                    "type" : "button",
                                    "tooltiptext":"Ir al mmmensaje siguiente",
                                    "btns.formulario":"frmWFMessages"
                                 }
                              ]
                        }           
                     ]
                ]
            }  

            const pool = await connection()
            const result = await pool
                    .request()
                    .input("PageNumber", PageNumber)
                    .input("RowsOfPage", RowsOfPage)
                    .input("menUsr", usrId)
                    .input("usrId",usrId)
                    .input("usrIdentificadorSender",usrIdentificadorSender)
                    .query("exec [spMensajesJRJSON_Listar] @PageNumber, @RowsOfPage, @menUsr, @usrId, @usrIdentificadorSender");
            
            data.registros = result.recordset
            res.status(200).json(data)

        }catch (error) {
            if(error.message === 'No autorizado'){
                res.status(401).json({"id":"jr","error":401,message:error.message});
                return;
            }
            res.status(500).json({"id":"jr","error":500,message:error.message});
        }   
}

export const getJRid = async (req, res) => {
    const { id } = req.params
    res.status(200).json({"message":"Obteniento datos de bandeja de mensajes recibidos con id: " + id})
}

export const postJR = async (req, res) => {
    // Ejemplo de validación de datos con zod
    // Se debe validar todos los campos que se reciben
    const result = await validateReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Guardando datos de bandeja de mensajes recibidos"})
}

export const patchJRid = (req, res) => {
    const { id } = req.params
    const result = validatePartialReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Actualizando datos de bandeja de mensajes recibidos con id: " + id})
}