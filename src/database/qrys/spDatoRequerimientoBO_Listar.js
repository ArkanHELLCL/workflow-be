import connection from '../db.js'
import { checkToken } from './checkToken.js'

export const spDatoRequerimientoBO_Listar = async (token, PageNumber, RowsOfPage) => {
    const { usrId , usrIdentificadorSender } = await checkToken(token)
    return new Promise(async (resolve, reject) => {
        try {
            const pool = await connection()
            const result = await pool
                    .request()
                    .input("PageNumber", PageNumber)
                    .input("RowsOfPage", RowsOfPage)
                    .input("usrId",usrId)
                    .input("usrIdentificadorSender",usrIdentificadorSender)
                    .query("exec [spDatoRequerimientoBOJSON_Listar] @PageNumber, @RowsOfPage, @usrId, @usrIdentificadorSender");
            
            resolve(result.recordset)
        } catch (error) {
            reject(error)
        }
    })
}