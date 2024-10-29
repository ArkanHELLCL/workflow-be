# WorkFlow BE
# Proyecto de Gestión de Bandejas y Reportes

## Estructura del Proyecto

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/ArkanHELLCL/workflow-be.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd tu-repositorio
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

1. Inicia la aplicación:
    ```sh
    npm start
    ```
2. Abre tu navegador y navega a `http://localhost:3100`.

## Validación de Requerimientos

El esquema de validación de requerimientos se encuentra en [`src/schemas/requerimientos.js`](src/schemas/requerimientos.js). Utiliza la biblioteca `zod` para definir y validar los datos de entrada.

### Ejemplo de Validación

```javascript
import { validateReq, validatePartialReq } from '../schemas/requerimientos.js';

const input = {
    usrCod: '123',
    usrIdentificadorSender: 'sender',
    usrIdentificadorReceiver: 'receiver',
    usrAsunto: 'asunto',
    usrMensaje: 'mensaje',
    usrFecha: '2021-01-01',
    usrHora: 2020,
    usrEstado: ['Enviado'],
    usrTipo: 'tipo',
    usrPrioridad: 'alta',
    usrLeido: 'no',
    usrFechaLeido: '2021-01-02',
    usrHoraLeido: '10:00',
    usrFechaRespuesta: '2021-01-03',
    usrHoraRespuesta: '11:00',
    usrFechaCierre: '2021-01-04',
    usrHoraCierre: '12:00'
};

validateReq(input).then(result => {
    if (result.success) {
        console.log('Validación exitosa');
    } else {
        console.error('Errores de validación:', result.error.errors);
    }
});
```
Reingenieria del backend para el sistema de flujos.

### 2024
### **Septiembre**
**26/9**

1. Creación de repositorio

