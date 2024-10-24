import jwt from 'jsonwebtoken'
import connection from '../../database/db.js'

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
            "children":[
                  {
                     "id":"be",
                     "label":"De Entrada",
                     "description":"Bandeja de Entrada",
                     "url": "/api/bandejas/entrada",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bs",
                     "label":"De Salida",
                     "description":"Bandeja de Salida",
                     "url": "/api/bandejas/salida",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bf",
                     "label":"De Finalizados",
                     "description":"Bandeja de Finalizados",
                     "url": "/api/bandejas/finalizados",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bo",
                     "label":"De Otros",
                     "description":"Bandeja de Otros",
                     "url": "/api/bandejas/otros",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"ba",
                     "label":"De Archivados",
                     "description":"Bandeja de Archivados",
                     "url": "/api/bandejas/archivados",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bn",
                     "label":"De Antiguos",
                     "description":"Bandeja de Antiguos",                     
                     "children":[
                        {
                           "id":"bnc",
                           "label":"Sistema de Compras v0",
                           "description":"Requerimientos Sistema de Compras v0",
                           "url": "/api/bandejas/antiguos/compra",
                           "load": false,
                           "showyear":true
                        },
                        {
                           "id":"bnw",
                           "label":"Sistema WorkFlow v1",
                           "description":"Requerimientos Sistema WorkFlow v1",
                           "url": "/api/bandejas/antiguos/workflowv1",
                           "load": false,
                           "showyear":true
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
            "children": [
                  {
                     "id":"ru",
                     "label":"Dias por Usuario",
                     "description":"Reporte de Dias por Usuario",
                     "url":"/reportes/dias-por-usuario",
                     "load": false,
                     "showyear":true
                  },
                  {
                     "id":"ro",
                     "label":"Ordenes de Compras",
                     "description":"Reporte de Ordenes de Compras",
                     "url":"/reportes/ordenes-de-compras",
                     "load": false,
                     "showyear":true
                  },
                  {
                     "id":"rp",
                     "label":"Seguimiento de Pagos",
                     "description":"Reporte de Seguimiento de Pagos",
                     "url":"/reportes/seguimiento-de-pagos",
                     "load": false,
                     "showyear":true
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
            "description":"Bandejas de todos los flujos",            
            "children":[
                  {
                     "id":"be",
                     "label":"De Entrada",
                     "description":"Bandeja de Entrada",
                     "url": "/api/bandejas/entrada",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bs",
                     "label":"De Salida",
                     "description":"Bandeja de Salida",
                     "url": "/api/bandejas/salida",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bf",
                     "label":"De Finalizados",
                     "description":"Bandeja de Finalizados",
                     "url": "/api/bandejas/finalizados",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bo",
                     "label":"De Otros",
                     "description":"Bandeja de Otros",
                     "url": "/api/bandejas/otros",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"ba",
                     "label":"De Archivados",
                     "description":"Bandeja de Archivados",
                     "url": "/api/bandejas/archivados",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bn",
                     "label":"De Antiguos",
                     "description":"Bandeja de Antiguos",                     
                     "children":[
                        {
                           "id":"bnc",
                           "label":"Sistema de Compras v0",
                           "description":"Requerimientos Sistema de Compras v0",
                           "url": "/api/bandejas/antiguos/compra",
                           "load": false,
                           "showyear":true
                        },
                        {
                           "id":"bnw",
                           "label":"Sistema WorkFlow v1",
                           "description":"Requerimientos Sistema WorkFlow v1",
                           "url": "/api/bandejas/antiguos/workflowv1",
                           "load": false,
                           "showyear":true
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
            "children": [
                  {
                     "id":"ru",
                     "label":"Dias por Usuario",
                     "description":"Reporte de Dias por Usuario",
                     "url":"/reportes/dias-por-usuario",
                     "load": false,
                     "showyear":true
                  },
                  {
                     "id":"ro",
                     "label":"Ordenes de Compras",
                     "description":"Reporte de Ordenes de Compras",
                     "url":"/reportes/ordenes-de-compras",
                     "load": false,
                     "showyear":true
                  },
                  {
                     "id":"rp",
                     "label":"Seguimiento de Pagos",
                     "description":"Reporte de Seguimiento de Pagos",
                     "url":"/reportes/seguimiento-de-pagos",
                     "load": false,
                     "showyear":true
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
            "description":"Bandejas de todos los flujos",            
            "children":[
                  {
                     "id":"be",
                     "label":"De Entrada",
                     "description":"Bandeja de Entrada",
                     "url": "/api/bandejas/entrada",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bs",
                     "label":"De Salida",
                     "description":"Bandeja de Salida",
                     "url": "/api/bandejas/salida",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bf",
                     "label":"De Finalizados",
                     "description":"Bandeja de Finalizados",
                     "url": "/api/bandejas/finalizados",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bo",
                     "label":"De Otros",
                     "description":"Bandeja de Otros",
                     "url": "/api/bandejas/otros",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"ba",
                     "label":"De Archivados",
                     "description":"Bandeja de Archivados",
                     "url": "/api/bandejas/archivados",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bn",
                     "label":"De Antiguos",
                     "description":"Bandeja de Antiguos",                     
                     "children":[
                        {
                           "id":"bnc",
                           "label":"Sistema de Compras v0",
                           "description":"Requerimientos Sistema de Compras v0",
                           "url": "/api/bandejas/antiguos/compra",
                           "load": false,
                           "showyear":true
                        },
                        {
                           "id":"bnw",
                           "label":"Sistema WorkFlow v1",
                           "description":"Requerimientos Sistema WorkFlow v1",
                           "url": "/api/bandejas/antiguos/workflowv1",
                           "load": false,
                           "showyear":true
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
            "children": [
                  {
                     "id":"ru",
                     "label":"Dias por Usuario",
                     "description":"Reporte de Dias por Usuario",
                     "url":"/reportes/dias-por-usuario",
                     "load": false,
                     "showyear":true
                  },
                  {
                     "id":"ro",
                     "label":"Ordenes de Compras",
                     "description":"Reporte de Ordenes de Compras",
                     "url":"/reportes/ordenes-de-compras",
                     "load": false,
                     "showyear":true
                  },
                  {
                     "id":"rp",
                     "label":"Seguimiento de Pagos",
                     "description":"Reporte de Seguimiento de Pagos",
                     "url":"/reportes/seguimiento-de-pagos",
                     "load": false,
                     "showyear":true
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
            "description":"Bandejas de todos los flujos",            
            "children":[
                  {
                     "id":"be",
                     "label":"De Entrada",
                     "description":"Bandeja de Entrada",
                     "url": "/api/bandejas/entrada",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bs",
                     "label":"De Salida",
                     "description":"Bandeja de Salida",
                     "url": "/api/bandejas/salida",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bf",
                     "label":"De Finalizados",
                     "description":"Bandeja de Finalizados",
                     "url": "/api/bandejas/finalizados",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"bo",
                     "label":"De Otros",
                     "description":"Bandeja de Otros",
                     "url": "/api/bandejas/otros",
                     "load": true,
                     "showyear":true
                  },
                  {
                     "id":"ba",
                     "label":"De Archivados",
                     "description":"Bandeja de Archivados",
                     "url": "/api/bandejas/archivados",
                     "load": true,
                     "showyear":true
                  }
               ]
         }
      ],         
      "reportes":[
         {
            "id":"r",
            "label":"Reportes",
            "description":"Reportes de todos los flujos",            
            "children": [
                  {
                     "id":"ru",
                     "label":"Dias por Usuario",
                     "description":"Reporte de Dias por Usuario",
                     "url":"/reportes/dias-por-usuario",
                     "load": false,
                     "showyear":true
                  },
                  {
                     "id":"ro",
                     "label":"Ordenes de Compras",
                     "description":"Reporte de Ordenes de Compras",
                     "url":"/reportes/ordenes-de-compras",
                     "load": false,
                     "showyear":true
                  },
                  {
                     "id":"rp",
                     "label":"Seguimiento de Pagos",
                     "description":"Reporte de Seguimiento de Pagos",
                     "url":"/reportes/seguimiento-de-pagos",
                     "load": false,
                     "showyear":true
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
       "children":[
               {
                   "id":"mu",
                   "label":"Usuarios",
                   "description":"Mantenedor de Usuarios",
                   "url":"/api/mantenedores/usuarios",
                   "load": false,
                   "showyear":true
               },
               {
                   "id":"ml",
                   "label":"Lista Desplegables",
                   "description":"Mantenedor de Lista Desplegables",
                   "url":"/api/mantenedores/listas-desplegable",
                   "load": false,
                   "showyear":true
               },
               {
                   "id":"mi",
                   "label":"Items Lista Desplegables",
                   "description":"Mantenedor de Items Lista Desplegables",
                   "url":"/api/mantenedores/items-lista-desplegable",
                   "load": false,
                   "showyear":true
               },
               {
                   "id":"mp",
                   "label":"Proveedores",
                   "description":"Mantenedor de proveedoress",
                   "url":"/api/mantenedores/proveedores",
                   "load": false,
                   "showyear":true
               },
               {
                   "id":"mc",
                   "label":"Comunas",
                   "description":"Mantenedor de comunas",
                   "url":"/api/mantenedores/comunas",
                   "load": false,
                   "showyear":true
               }
       ]
   }],
   "mensajes":[
       {
       "id":"j",
       "label":"Mensajes",
       "description":"Mensajes personales",       
       "children":[
           {
               "id":"jr",
               "label":"Recibidos",
               "description":"Mensajes Recibidos",
               "url": "/api/mensajes/entrada",
               "load": true,
               "showyear":true
           },
           {
               "id":"je",
               "label":"Enviados",
               "description":"Mensajes Enviados",
               "url": "/api/mensajes/enviados",
               "load": false,
               "showyear":true
           },
           {
               "id":"jb",
               "label":"Borradores",
               "description":"Mensajes Borradores",
               "url": "/api/mensajes/borradores",
               "load": false,
               "showyear":true
           },
           {
               "id":"jl",
               "label":"Eliminados",
               "description":"Mensajes Eliminados",
               "url": "/api/mensajes/eliminados",
               "load": false,
               "showyear":true
           }]         
       }
   ]
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