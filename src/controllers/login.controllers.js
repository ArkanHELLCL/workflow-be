import jwt from 'jsonwebtoken'
//import connection from '../database/db.js'

const user = {    
    "PER_Id":1,
    "PER_Nombre":"Super Administrador",
    "USR_Usuario":"lcastillo",
    "USR_Nombre":"Luis Castillo Pacheco",
    "USR_Id":5,
    "USR_Identificador":"{80B9DCB3-C59C-4A91-B6CE-C40907C7058B}",
    "DEP_Descripcion":"Departamento de Tecnologpias de la Información",
    "DEP_Id":1,
    "DEP_TipoVista":false,
    "DEP_DescripcionCorta":"Dep. TICs",
    "USR_LDAP":true,
    "USR_Jefatura":false,
    "USR_Mail":"lcastillo@mintrab.gob.cl",
    "USR_MsgSinLeer":5,
    "error":200,
    "message":null,
    "bandejas": [{
        "id" : "be",
        "descripction": "Bandeja de entrada",
        "api": "/api/bandeja-de-entrada",
        },
        {
            "id" : "bs",
            "descripction": "Bandeja de salida",
            "api": "/api/bandeja-de-salida",
        },
        {
            "id": "bf",
            "descripction": "Bandeja de finalizados",
            "api": "/api/bandeja-finalizados"
        },
        {
            "id": "ba",
            "descripction": "Bandeja de archivados",
            "api": "/api/bandeja-archivados"
        },
        {
            "id": "bo",
            "descripction": "Bandeja de otros",
            "api": "/api/bandeja-otros"
        }
    ],
    "USR_Photo":" data:image/jpeg;base64,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"
  }

//Login
export const postLogin = async (req, res) => {
    const { usrCod, usrClave } = req.body    
    if(!usrCod || !usrClave){
        res.status(404).json({"error":404,message:"Recurso no encontrado"});
        return;
    }
    try {
        const usrId = 5
        const usrIdentificadorSender = "80B9DCB3-C59C-4A91-B6CE-C40907C7058B"            

        /*const pool = await connection()
        const result = await pool
                .request()
                .input("usrId",usrId)                
                .query("exec [spUsuario_Consultar] @usrId");*/
        
        //Token de autenticación
        const token = jwt.sign({usrId,usrIdentificadorSender}, process.env.JWT_SECRETO, {expiresIn: '1h'})
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
            .json(user)
    } catch (error) {
        res.status(500).json({"error":500,message:error.message});
    }
}