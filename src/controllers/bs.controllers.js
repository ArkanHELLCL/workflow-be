import connection from '../database/db.js'

//Bandeja de salida
export const getBS = async (req, res) => {
    if(!req.body.PageNumber || !req.body.RowsOfPage || !req.body.usrCod || !req.body.usrIdentificadorSender){
        res.status(404).json({"error":404,message:"Recurso no encontrado"});
        return;
    }
    try {
        const PageNumber = req.body.PageNumber;
        const RowsOfPage = req.body.RowsOfPage;
        const usrCod = req.body.usrCod;
        const usrIdentificadorSender = req.body.usrIdentificadorSender;
        const pool = await connection();
        const result = await pool
                .request()
                .input("PageNumber", PageNumber)
                .input("RowsOfPage", RowsOfPage)
                .input("usrCod",usrCod)
                .input("usrIdentificadorSender",usrIdentificadorSender)
                .query("exec [spDatoRequerimientoBSJSON_Listar] @PageNumber, @RowsOfPage, @usrCod, @usrIdentificadorSender");
        res.json(result.recordset)    
    } catch (error) {
        res.status(500).json({"error":500,message:error.message});
    }
}

export const getBSid = async (req, res) => {
    res.json({"message":"Obteniento datos de bandeja de salida con id: "+req.params.id})
}

export const postBS = async (req, res) => {
    res.json({"message":"Guardando datos de bandeja de entrada"})
}

export const putBSid = (req, res) => {
    res.json({"message":"Actualizando datos de bandeja de entrada con id: "+req.params.id})
}