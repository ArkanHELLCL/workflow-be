import z from 'zod'

const reqSchema = z.object({
    usrCod: z.string({
        required_error: 'El campo usrCod es requerido',
        invalid_type_error: 'El campo usrCod debe ser de tipo string'
    }),
    usrIdentificadorSender: z.string(),
    usrIdentificadorReceiver: z.string(),
    usrAsunto: z.string(),
    usrMensaje: z.string(),
    usrFecha: z.string(),
    usrHora: z.number().min(1900).max(2021),
    usrEstado: z.array(
        z.enum(['Enviado', 'Recibido', 'Leido', 'Respondido', 'Cerrado'])   
    ),
    usrTipo: z.string(),
    usrPrioridad: z.string(),
    usrLeido: z.string(),
    usrFechaLeido: z.string(),
    usrHoraLeido: z.string(),
    usrFechaRespuesta: z.string(),
    usrHoraRespuesta: z.string(),
    usrFechaCierre: z.string(),
    usrHoraCierre: z.string().optional(),       //no requerido
})

export function validateReq(input) {
    return reqSchema.safeParseAsync(input)
    /*if (!result.success) {
        throw new Error(result.error.errors[0].message)
    }*/
}

export function validatePartialReq(input){
    return reqSchema.partial().safeParseAsync(input)
    /*if (!result.success) {
        throw new Error(result.error.errors[0].message)
    }*/
}