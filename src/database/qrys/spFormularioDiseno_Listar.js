import connection from '../db.js'
import { checkToken } from './checkToken.js'

export const spFormularioDiseno_Listar = async (token, FDI_PasoActivacion, FOR_Id, VFO_Id) => {
    const { usrId , usrIdentificadorSender } = await checkToken(token)
    return new Promise(async (resolve, reject) => {
        try {
            const pool = await connection()
            const result = await pool
                    .request()
                    .input("FDI_PasoActivacion", FDI_PasoActivacion)
                    .input("FOR_Id", FOR_Id)
                    .input("VFO_Id", VFO_Id)
                    .input("usrId",usrId)
                    .input("usrIdentificadorSender",usrIdentificadorSender)
                    .query("exec [spFormularioDisenoJSON_Listar] @FDI_PasoActivacion, @FOR_Id, @VFO_Id, @usrId, @usrIdentificadorSender");
            
            resolve(result.recordset)
        } catch (error) {
            reject(error)
        }
    })
}