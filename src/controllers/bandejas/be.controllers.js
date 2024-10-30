import jwt from 'jsonwebtoken'
import connection from '../../database/db.js'
import { validateReq, validatePartialReq } from '../../schemas/requerimientos.js'


const botones = [
    [
          {
                "id" : "grp_1",
                "nombre" : "Tomar/Liberar",
                "descripcion" : "Tomar/liberar",
                "botones" : [
                   {
                      "id" : "btn_tomar",
                      "nombre" : "Tomar",
                      "descripcion" : ["Tomar","Requerimiento"],
                      "type" : "button",
                      "dialogo":"confirm",
                      "titulo":"Tomar Requerimiento",
                      "mensaje":"¿Estas seguro de querer tomar este requerimiento?",
                      "tooltiptext":"Tomar Requerimiento para realizar acciones sobre el mismo.",
                      "formulario":"frmWorkFlowv4"
                   },
                   {
                      "id" : "btn_liberar",
                      "nombre" : "Liberar",
                      "descripcion" : ["Liberar","Requerimiento"],
                      "type" : "button",
                      "dialogo":"confirm",
                      "titulo":"Liberar Requerimiento",
                      "mensaje":"¿Estas seguro de querer liberar este requerimiento?",
                      "tooltiptext":"Liberar Requerimiento para que otro usuario pueda tomarlo.",
                      "formulario":"frmWorkFlowv4"
                   }
                ]
          }
    ],
    [
       {
             "id" : "grp_2",
             "nombre" : "Responder",
             "descripcion" : "Responder",
             "botones" : [
                {
                   "id":"btn_enviar",
                   "nombre":"Siguiente",
                   "descripcion":["Enviar al","Siguiente Paso"],
                   "type" : "submit",
                   "action":"/enviar",
                   "dialogo":"confirm",
                   "titulo":"Enviar Requerimiento",
                   "mensaje":"¿Estas seguro de querer enviar al siguiente paso este requerimiento?",
                   "tooltiptext":"Enviar Requerimiento al siguiente paso.",
                   "formulario":"frmWorkFlowv4"
                },               
                {
                   "id":"btn_enviardes",
                   "nombre":"Usuario",
                   "descripcion":["Enviar a","Destinatario"],
                   "type" : "submit",
                   "action": "/destinatario",
                   "dialogo":"confirm",
                   "titulo":"Enviar a Destinatario",
                   "mensaje":"¿Estas seguro de querer enviar al Destinatario agregado en este formulario?",
                   "tooltiptext":"Enviar Requerimiento al destinatario seleccionado.",
                   "formulario":"frmWorkFlowv4"
                },
                {
                   "id":"btn_devolver",
                   "nombre":"Devolver",
                   "descripcion":["Devolver","Requerimiento"],
                   "type" : "submit",
                   "action":"/devolver",
                   "dialogo":"confirm",
                   "titulo":"Devolver Requerimiento",
                   "mensaje":"¿Estas seguro de querer devolver este requerimiento?",
                   "tooltiptext":"Devolver Requerimiento al paso anterior.",
                   "formulario":"frmWorkFlowv4"
                },
                {
                   "id":"btn_conforme",
                   "nombre":"Conforme",
                   "descripcion":["Requerimiento","Conforme"],
                   "type" : "submit",
                   "action": "/conforme",
                   "dialogo":"confirm",
                   "titulo":"Requerimiento Conforme",
                   "mensaje":"¿Estas seguro de querer dejar conforme este requerimiento?",
                   "tooltiptext":"Dejar Requerimiento en estado Conforme.",
                   "formulario":"frmWorkFlowv4"
                },
                {
                   "id":"btn_disconforme",
                   "nombre":"Disconforme",
                   "descripcion":["Requerimiento","Disconforme"],
                   "type" : "submit",
                   "action": "/disconforme",
                   "dialogo":"confirm",
                   "titulo":"Requerimiento Disconforme",
                   "mensaje":"¿Estas seguro de querer dejar disconforme este requerimiento?",
                   "tooltiptext":"Dejar Requerimiento en estado Disconforme.",
                   "formulario":"frmWorkFlowv4"
                }
             ]
       }           
    ],
    [
          {
             "id": "grp_3",
             "nombre": "Terminar",
             "descripcion": "Terminar",
             "botones": [
                {
                   "id": "btn_finalizar",
                   "nombre": "Finalizar",
                   "descripcion": ["Finalizar","Requerimiento"],
                   "type" : "submit",
                   "action": "/finalizar",
                   "dialogo":"confirm",
                   "titulo":"Finalizar Requerimiento",
                   "mensaje":"¿Estas seguro de querer finalizar este requerimiento?",
                   "tooltiptext":"Finalizar Requerimiento para que no se puedan realizar más acciones.",
                   "formulario":"frmWorkFlowv4"
                },               
                {
                   "id":"btn_rechazar",
                   "nombre":"Rechazar",
                   "descripcion":["Rechazar","Requerimiento"],
                   "type" : "submit",
                   "action": "/rechazar",
                   "dialogo":"confirm",
                   "titulo":"Rechazar Requerimiento",
                   "mensaje":"¿Estas seguro de querer rechazar este requerimiento?",
                   "tooltiptext":"Rechazar Requerimiento para que no se puedan realizar más acciones.",
                   "formulario":"frmWorkFlowv4"
                }
             ]
          }           
    ],
    [
       {
             "id" : "grp_4",
             "nombre" : "Abrir",
             "descripcion" : "Abrir",
             "botones" : [
                {
                   "id":"btn_abrir",
                   "nombre":"Abrir",
                   "descripcion":["Abrir","Requerimiento"],
                   "type" : "submit",
                   "action": "/abrir",
                   "dialogo":"confirm",
                   "titulo":"Abrir Requerimiento",
                   "mensaje":"¿Estas seguro de querer abrir este requerimiento?",
                   "tooltiptext":"Abrir Requerimiento archivado",
                   "formulario":"frmWorkFlowv4"
                }
             ]
       }           
    ],
    [
       {
             "id" : "grp_5",
             "nombre" :"Revisar",
             "descripcion" : "Revisar",
             "botones" : [
                {
                   "id":"btn_retroceder",
                   "nombre":"",
                   "descripcion":["Ir a Paso","Anterior"],
                   "type" : "button",
                   "tooltiptext":"Ir al paso anterior",
                   "formulario":"frmWorkFlowv4"
                },               
                {
                   "id":"btn_avanzar",
                   "nombre":"",
                   "descripcion":["Ir a Paso","Siguiete"],
                   "type" : "button",
                   "tooltiptext":"Ir al paso siguiente",
                   "formulario":"frmWorkFlowv4"
                }
             ]
       }           
    ],
    [
       {
             "id" : "grp_6",
             "nombre" : "Observaciones",
             "descripcion" : "Observaciones",
             "botones" : [
                {
                   "id":"btn_observaciones",
                   "nombre":"",
                   "descripcion":["Ver","Observaciones"],
                   "type" : "button",
                   "dialogo":"message",
                   "titulo":"Ver Observaciones",
                   "tooltiptext":"Observaciones del Requerimiento",
                   "formulario":"frmWorkFlowv4"
                }
             ]
       }           
    ]
]
//Bandeja de entrada
export const getBE = async (req, res) => {
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
                "id" : "be",
                "registros": null
            }  

            const pool = await connection()
            const result = await pool
                    .request()
                    .input("PageNumber", PageNumber)
                    .input("RowsOfPage", RowsOfPage)
                    .input("usrId",usrId)
                    .input("usrIdentificadorSender",usrIdentificadorSender)
                    .query("exec [spDatoRequerimientoBEJSON_Listar] @PageNumber, @RowsOfPage, @usrId, @usrIdentificadorSender");
            //data.find(el => el.id === 'bo').registros = result.recordset
            data.registros = result.recordset
            res.status(200).json(data)        

    }catch (error) {
        if(error.message === 'No autorizado'){
            res.status(401).json({"id":"be","error":401,message:error.message});
            return;
        }
        res.status(500).json({"id":"be","error":500,message:error.message});
    }
}

export const getBEid = async (req, res) => {    
    const { id } = req.params
    const token = req.cookies.access_token
    if(!token){
        res.status(401).json({"error":401,message:"No autorizado"});
        return;
    }    
    if(!id){
        res.status(404).json({"error":404,message:"Recurso no encontrado"});
        return;
    }    

    //Rescatando datos del payload del token
    try {
        let usrId
        let usrIdentificadorSender
        let data
        jwt.verify(token, process.env.JWT_SECRETO, function(err, decoded) {            
            if (err) {                
                throw new Error('No autorizado')
            }
            const { usrId : usr_Id, usrIdentificadorSender : usr_IdentificadorSender } = decoded
            usrId = usr_Id
            usrIdentificadorSender = usr_IdentificadorSender
        })

        const pool = await connection()
        const result = await pool
                .request()
                .input("id", id)                    
                .input("usrId",usrId)
                .input("usrIdentificadorSender",usrIdentificadorSender)
                .query("exec [spDatoRequerimientoJSON_Consultar] @id, @usrId, @usrIdentificadorSender");
        
        data = result.recordset        
        if(data.length > 0){         
            const data2 =  
            {
                "bandeja" : "be",
                "botones": botones,
                "campos": [],
                "adjuntos":[]
            }
            const  FDI_PasoActivacion = data[0].FLD_Id
            let VFO_Id = null                        
            if(data[0]?.VFO_Id)
                VFO_Id = data[0].VFO_Id
            const FOR_Id = data[0].FOR_Id
            
            const result2 = await pool
                .request()
                .input("FDI_PasoActivacion", FDI_PasoActivacion)
                .input("FOR_Id", FOR_Id)
                .input("VFO_Id", VFO_Id)
                .input("usrId",usrId)
                .input("usrIdentificadorSender",usrIdentificadorSender)
                .query("exec [spFormularioDisenoJSON_Listar] @FDI_PasoActivacion, @FOR_Id, @VFO_Id, @usrId, @usrIdentificadorSender");

            data2.campos = result2.recordset            
            res.status(200).json(data2)
        }else{
                throw new Error('Registro no encontrado')
            }            

    }catch (error) {
        if(error.message === 'No autorizado'){
            res.status(401).json({"id":"be","error":401,message:error.message});
            return;
        }
        if(error.message === 'Registro no encontrado'){
            res.status(404).json({"id":"be","error":404,message:error.message});
            return;
        }
        res.status(500).json({"id":"be","error":500,message:error.message});
    }
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

export const patchBEid = (req, res) => {
    const { id } = req.params
    const result = validatePartialReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Actualizando datos de bandeja de entrada con id: " + id})
}