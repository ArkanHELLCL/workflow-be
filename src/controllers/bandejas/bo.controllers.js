import { spDatoRequerimientoBO_Listar, spDatoRequerimiento_Consultar, spFormularioDiseno_Listar } from '../../database/qrys/index.js'

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
const adjutnos = []

//Bandeja de otros
export const getBO = async (req, res) => {
    //Rescatando datos del payload del token
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
    
    try {        
        const data = {
            "id" : "bo",
            "registros": null
        }
        data.registros = await spDatoRequerimientoBO_Listar(token, PageNumber, RowsOfPage)                         
        res.status(200).json(data)        

    }catch (error) {
        if(error.message === 'No autorizado'){
            res.status(401).json({"id":"bo","error":401,message:error.message});
            return;
        }
        res.status(500).json({"id":"bo","error":500,message:error.message});
    }
}

export const getBOid = async (req, res) => {    
    const { id } = req.params
    //Rescatando datos del payload del token
    const token = req.cookies.access_token
    if(!token){
        res.status(401).json({"error":401,message:"No autorizado"});
        return;
    }    
    if(!id){
        res.status(404).json({"error":404,message:"Recurso no encontrado"});
        return;
    }    
    
    try {
        const data = await spDatoRequerimiento_Consultar(token, id)                         
        console.log(data)

        if(data.length > 0){         
            const data2 =  
            {
                "bandeja" : "bo",
                "botones": botones,
                "adjuntos":adjutnos,
                "campos": [],                
            }
            const  FDI_PasoActivacion = data[0].FLD_Id
            let VFO_Id = null                        
            if(data[0]?.VFO_Id)
                VFO_Id = data[0].VFO_Id
            const FOR_Id = data[0].FOR_Id

            data2.campos = await spFormularioDiseno_Listar(token, FDI_PasoActivacion, FOR_Id, VFO_Id)
            res.status(200).json(data2)
        }else{
                throw new Error('Registro no encontrado')
            }            

    }catch (error) {
        if(error.message === 'No autorizado'){
            res.status(401).json({"id":"bo","error":401,message:error.message});
            return;
        }
        if(error.message === 'Registro no encontrado'){
            res.status(404).json({"id":"bo","error":404,message:error.message});
            return;
        }
        res.status(500).json({"id":"bo","error":500,message:error.message});
    }
}

export const postBO = async (req, res) => {
    // Ejemplo de validación de datos con zod
    // Se debe validar todos los campos que se reciben
    const result = await validateReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Guardando datos de bandeja de otros"})
}

export const patchBOid = (req, res) => {
    const { id } = req.params
    const result = validatePartialReq(req.body)
    if (!result.success) {
        res.status(400).json({ "error": 400, "message": JSON.parse(result.error.message )})
        return
    }
    res.status(201).json({"message":"Actualizando datos de bandeja de otros con id: " + id})
}