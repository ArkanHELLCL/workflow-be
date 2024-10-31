import connection from '../db.js'
import { checkToken } from './checkToken.js'

export const spDatoRequerimiento_Consultar = async (token, id) => {
    const { usrId , usrIdentificadorSender } = await checkToken(token)
    return new Promise(async (resolve, reject) => {
        try {
            const pool = await connection()
            const result = await pool
                    .request()
                    .input("id", id)                    
                    .input("usrId",usrId)
                    .input("usrIdentificadorSender",usrIdentificadorSender)
                    .query("exec [spDatoRequerimientoJSON_Consultar] @id, @usrId, @usrIdentificadorSender");
            
            resolve(result.recordset)
        } catch (error) {
            reject(error)
        }
    })
}