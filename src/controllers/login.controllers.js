import jwt from 'jsonwebtoken'
import connection from '../database/db.js'
const bandejas = [{
      "id" : "be",
      "description": "Bandeja de entrada",
      "url": "/api/bandeja-de-entrada",
      "load": true
   },
   {
      "id" : "bs",
      "description": "Bandeja de salida",
      "url": "/api/bandeja-de-salida",
      "load": true
   },
   {
      "id": "bf",
      "description": "Bandeja de finalizados",
      "url": "/api/bandeja-de-finalizados",
      "load": true
   },
   {
      "id": "ba",
      "description": "Bandeja de archivados",
      "url": "/api/bandeja-de-archivados",
      "load": true
   },
   {
      "id": "bo",
      "description": "Bandeja de otros",
      "url": "/api/bandeja-de-otros",
      "load": true
   },
   {
      "id": "bnc",
      "description": "Bandeja antiguos compra",
      "url": "/api/bandeja-antiguos-compra",
      "load": false
   },
   {
      "id": "bnw",
      "description": "Bandeja antiguos workflowv1",
      "url": "/api/bandeja-antiguos-workflowv1",
      "load": false
   },
   {
      "id": "je",
      "description": "Bandeja entrada mensajes",
      "url": "/api/mensajes/bandeja-entrada",
      "load": true
   }
]

const treeMenu = {
   "flujos":[
   {
      "id":"0",         
      "description":"Todos los Flujos",      
      "bandejas":[
         {
            "id":"b",
            "label":"Bandejas",
            "description":"Bandejas de todos los flujos",
            "url":"/bandejas",
            "children":[
                  {
                     "id":"be",
                     "label":"De Entrada",
                     "description":"Bandeja de Entrada",
                     "url":"/bandejas/entrada"
                  },
                  {
                     "id":"bs",
                     "label":"De Salida",
                     "description":"Bandeja de Salida",
                     "url":"/bandejas/salida"
                  },
                  {
                     "id":"bf",
                     "label":"De Finalizados",
                     "description":"Bandeja de Finalizados",
                     "url":"/bandejas/finalizados"        
                  },
                  {
                     "id":"bo",
                     "label":"De Otros",
                     "description":"Bandeja de Otros",
                     "url":"/bandejas/otros"
                  },
                  {
                     "id":"ba",
                     "label":"De Archivados",
                     "description":"Bandeja de Archivados",
                     "url":"/bandejas/archivados"
                  },
                  {
                     "id":"bn",
                     "label":"De Antiguos",
                     "description":"Bandeja de Antiguos",
                     "url":"/bandejas/antiguos",
                     "children":[
                        {
                           "id":"bnc",
                           "label":"Sistema de Compras v0",
                           "description":"Requerimientos Sistema de Compras v0",
                           "url":"/bandejas/antiguos/compras"
                        },
                        {
                           "id":"bnw",
                           "label":"Sistema WorkFlow v1",
                           "description":"Requerimientos Sistema WorkFlow v1",
                           "url":"/bandejas/antiguos/workflowv1"
                        }
                     ]
                  }
               ]
         }
      ],
      "reportes":[
         {
            "id":"r",
            "label":"Reportes",
            "description":"Reportes de todos los flujos",
            "url":"/reportes",
            "children": [
                  {
                     "id":"ru",
                     "label":"Dias por Usuario",
                     "description":"Reporte de Dias por Usuario",
                     "url":"/reportes/dias-por-usuario"
                  },
                  {
                     "id":"ro",
                     "label":"Ordenes de Compras",
                     "description":"Reporte de Ordenes de Compras",
                     "url":"/reportes/ordenes-de-compras"
                  },
                  {
                     "id":"rp",
                     "label":"Seguimiento de Pagos",
                     "description":"Reporte de Seguimiento de Pagos",
                     "url":"/reportes/seguimiento-de-pagos"
                  }
            ]
         }
      ]
   },
   {
      "id":"1",         
      "description":"Flujo de Compras",         
      "bandejas":[
         {
            "id":"b",
            "label":"Bandejas",
            "description":"Bandejas de Compras",
            "url":"/bandejas",
            "children":[
                  {
                     "id":"be",
                     "label":"De Entrada",
                     "description":"Bandeja de Entrada",
                     "url":"/bandejas/entrada"              
                  },
                  {
                     "id":"bs",
                     "label":"De Salida",
                     "description":"Bandeja de Salida",
                     "url":"/bandejas/salida"               
                  },
                  {
                     "id":"bf",
                     "label":"De Finalizados",
                     "description":"Bandeja de Finalizados",
                     "url":"/bandejas/finalizados"            
                  },
                  {
                     "id":"bo",
                     "label":"De Otros",
                     "description":"Bandeja de Otros",
                     "url":"/bandejas/otros"              
                  },
                  {
                     "id":"ba",
                     "label":"De Archivados",
                     "description":"Bandeja de Archivados",
                     "url":"/bandejas/archivados"               
                  },
                  {
                     "id":"bn",
                     "label":"De Antiguos",
                     "description":"Bandeja de Antiguos",
                     "url":"/bandejas/antiguos",
                     "children":[
                        {
                           "id":"bnc",
                           "label":"Sistema de Compras v0",
                           "description":"Requerimientos Sistema de Compras v0",
                           "url":"/bandejas/antiguos/compras"                
                        },
                        {
                           "id":"bnw",
                           "label":"Sistema WorkFlow v1",
                           "description":"Requerimientos Sistema WorkFlow v1",
                           "url":"/bandejas/antiguos/workflowv1"                              
                        }
                     ]
                  }
               ]               
         }
      ],         
      "reportes":[
         {
            "id":"r",
            "label":"Reportes",
            "description":"Reportes de Compras",
            "url":"/reportes",
            "children": [
                  {
                     "id":"ru",
                     "label":"Dias por Usuario",
                     "description":"Reporte de Dias por Usuario",
                     "url":"/reportes/dias-por-usuario"
                  },
                  {
                     "id":"ro",
                     "label":"Ordenes de Compras",
                     "description":"Reporte de Ordenes de Compras",
                     "url":"/reportes/ordenes-de-compras"
                  },
                  {
                     "id":"rp",
                     "label":"Seguimiento de Pagos",
                     "description":"Reporte de Seguimiento de Pagos",
                     "url":"/reportes/seguimiento-de-pagos"
                  }
            ]
         }
      ]
   },
   {
      "id":"2",         
      "description":"Flujo Boletas de Garantía",         
      "bandejas":[
         {
            "id":"b",
            "label":"Bandejas",
            "description":"Bandejas de Boletas de Garantía",
            "url":"/bandejas",
            "children":[
                  {
                     "id":"be",
                     "label":"De Entrada",
                     "description":"Bandeja de Entrada",
                     "url":"/bandejas/entrada"
                  },
                  {
                     "id":"bs",
                     "label":"De Salida",
                     "description":"Bandeja de Salida" ,
                     "url":"/bandejas/salida"      
                  },
                  {
                     "id":"bf",
                     "label":"De Finalizados",
                     "description":"Bandeja de Finalizados",
                     "url":"/bandejas/finalizados"              
                  },
                  {
                     "id":"bo",
                     "label":"De Otros",
                     "description":"Bandeja de Otros",
                     "url":"/bandejas/otros"               
                  },
                  {
                     "id":"ba",
                     "label":"De Archivados",
                     "description":"Bandeja de Archivados",
                     "url":"/bandejas/archivados"
                  },
                  {
                     "id":"bn",
                     "label":"De Antiguos",
                     "description":"Bandeja de Antiguos",
                     "url":"/bandejas/antiguos",
                     "children":[
                        {
                           "id":"bnc",
                           "label":"Sistema de Compras v0",
                           "description":"Requerimientos Sistema de Compras v0",
                           "url":"/bandejas/antiguos/compras"                     
                        },
                        {
                           "id":"bnw",
                           "label":"Sistema WorkFlow v1",
                           "description":"Requerimientos Sistema WorkFlow v1",
                           "url":"/bandejas/antiguos/workflowv1"
                        }
                     ]
                  }
               ]
         }
      ],         
      "reportes":[
         {
            "id":"r",
            "label":"Reportes",
            "description":"Reportes de Boletas de Garantías",
            "url":"/reportes",
            "children": [
                  {
                     "id":"ru",
                     "label":"Dias por Usuario",
                     "description":"Reporte de Dias por Usuario",
                     "url":"/reportes/dias-por-usuario"
                  },
                  {
                     "id":"ro",
                     "label":"Ordenes de Compras",
                     "description":"Reporte de Ordenes de Compras",
                     "url":"/reportes/ordenes-de-compras"
                  },
                  {
                     "id":"rp",
                     "label":"Seguimiento de Pagos",
                     "description":"Reporte de Seguimiento de Pagos",
                     "url":"/reportes/seguimiento-de-pagos"
                  }
            ]
         }
      ]
   },
   {
      "id":"4",         
      "description":"Flujo de Pagos",
      "bandejas":[
         {
            "id":"b",
            "label":"Bandejas",
            "description":"Bandejas de Pagos",
            "url":"/bandejas",
            "children":[
               {
                  "id":"be",
                  "label":"De Entrada",
                  "description":"Bandeja de Entrada",
                  "url":"/bandejas/entrada"               
               },
               {
                  "id":"bs",
                  "label":"De Salida",
                  "description":"Bandeja de Salida",
                  "url":"/bandejas/salida"           
               },
               {
                  "id":"bf",
                  "label":"De Finalizados",
                  "description":"Bandeja de Finalizados",
                  "url":"/bandejas/finalizados"           
               },
               {
                  "id":"bo",
                  "label":"De Otros",
                  "description":"Bandeja de Otros",
                  "url":"/bandejas/otros"    
               },
               {
                  "id":"ba",
                  "label":"De Archivados",
                  "description":"Bandeja de Archivados",
                  "url":"/bandejas/archivados"
               }
            ]
         }
      ],         
      "reportes":[
         {
            "id":"r",
            "label":"Reportes",
            "description":"Reportes de Pagos",
            "url":"/reportes",
            "children": [
                  {
                     "id":"ru",
                     "label":"Dias por Usuario",
                     "description":"Reporte de Dias por Usuario",
                     "url":"/reportes/dias-por-usuario"
                  },
                  {
                     "id":"ro",
                     "label":"Ordenes de Compras",
                     "description":"Reporte de Ordenes de Compras",
                     "url":"/reportes/ordenes-de-compras"
                  },
                  {
                     "id":"rp",
                     "label":"Seguimiento de Pagos",
                     "description":"Reporte de Seguimiento de Pagos",
                     "url":"/reportes/seguimiento-de-pagos"
                  }
            ]
         }
      ]
   }
   ],
   "mantenedores":[
   {
       "id":"m",
       "label":"Mantenedores",
       "description":"Mantenedores de todos los flujos",
       "url":"/mantenedores",
       "children":[
               {
                   "id":"mu",
                   "label":"Usuarios",
                   "description":"Mantenedor de Usuarios",
                   "url":"/mantenedores/usuarios"
               },
               {
                   "id":"ml",
                   "label":"Lista Desplegables",
                   "description":"Mantenedor de Lista Desplegables",
                   "url":"/mantenedores/lista-desplegable"
               },
               {
                   "id":"mi",
                   "label":"Items Lista Desplegables",
                   "description":"Mantenedor de Items Lista Desplegables",
                   "url":"/mantenedores/item-lista-desplegable"
               },
               {
                   "id":"mp",
                   "label":"Proveedores",
                   "description":"Mantenedor de proveedoress",
                   "url":"/mantenedores/proveedores"
               },
               {
                   "id":"mc",
                   "label":"Comunas",
                   "description":"Mantenedor de comunas",
                   "url":"/mantenedores/comunas"
               }
       ]
   }],
   "mensajes":[
       {
       "id":"j",
       "label":"Mensajes",
       "description":"Mensajes personales",
       "url":"/mensajes",
       "children":[
           {
               "id":"jr",
               "label":"Recibidos",
               "description":"Mensajes Recibidos",
               "url":"/mensajes/recibidos"
           },
           {
               "id":"je",
               "label":"Enviados",
               "description":"Mensajes Enviados",
               "url":"/mensajes/enviados"
           },
           {
               "id":"jb",
               "label":"Borradores",
               "description":"Mensajes Borradores",
               "url":"/mensajes/borradores"
           },
           {
               "id":"jl",
               "label":"Eliminados",
               "description":"Mensajes Eliminados",
               "url":"/mensajes/eliminados"
           }
       ]         
       }
   ],
}

//Login
export const postLogin = async (req, res) => {
   const { usrCod, usrClave } = req.body    
   if(!usrCod || !usrClave){
        res.status(404).json({"error":404,message:"Recurso no encontrado"});
        return;
   }
   try {
      const pool = await connection()
      const result = await pool
               .request()
               .input("usrCod",usrCod)                
               .query("exec [spUsuario_ConsultarPorLogin] @usrCod");
      
      const data = result.recordset[0]
      data.error = 200
      data.message = null
      data.bandejas = bandejas
      data.treeMenu = treeMenu
      const usrId = data.USR_Id
      const usrIdentificadorSender = data.USR_Identificador
      const perId = data.PER_Id
      const depId = data.DEP_Id      
      
      //Token de autenticación
      const token = jwt.sign({usrId,usrIdentificadorSender,perId,depId}, process.env.JWT_SECRETO, {expiresIn: '1h'})
      //Creacion de cookie con el token
      res        
         .cookie('access_token', token, {
               path: '/',
               httpOnly: true, 
               //secure: process.env.NODE_ENV === 'production' ? true : false,
               secure: true,
               //sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',  //strict
               sameSite: 'none',
               maxAge: 1000 * 60 * 60, //1 hora
               credentials: 'include',
               mode: 'cors'                
         })
         .status(200)
         //.json(result.recordset)            
         //.json(user)
         .json(data)
   }catch (error) {      
     res.status(500).json({"error":500,message:error.message});
   }
}