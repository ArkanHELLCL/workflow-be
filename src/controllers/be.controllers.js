import connection from '../database/db.js'

export const getBE = async (req, res) => {
    const PageNumber = req.body.PageNumber;
    const RowsOfPage = req.body.RowsOfPage;
    const USR_Cod = req.body.USR_Cod;
    const USR_IdentificadorSender = req.body.USR_IdentificadorSender;
    const pool = await connection();
    const result = await pool
            .request()
            .input("PageNumber", PageNumber)
            .input("RowsOfPage", RowsOfPage)
            .input("USR_Cod",USR_Cod)
            .input("USR_IdentificadorSender",USR_IdentificadorSender)
            .query("exec [spDatoRequerimientoBEJSON_Listar] @PageNumber, @RowsOfPage, @USR_Cod, @USR_IdentificadorSender");
    res.json(result.recordset)
    //res.json({"message":"Obteniendo datos de bandeja de entrada"})
}

export const getBEid = async (req, res) => {
    res.json({"message":"Obteniento datos de bandeja de salida con id: "+req.params.id})
}

export const postBE = async (req, res) => {
    res.json({"message":"Guardando datos de bandeja de entrada"})
}

export const putBEid = (req, res) => {
    res.json({"message":"Actualizando datos de bandeja de entrada con id: "+req.params.id})
}