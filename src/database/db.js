import sql from 'mssql/msnodesqlv8.js'

const dbSettings = {
    driver: 'msnodesqlv8',
    /*user: process.env.DB_USER,
    password: process.env.DB_PASS,*/
    server: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    options: {      
      trustedConnection: true
    },  
}
const connection = async () => {
    console.log('Conectado a la BD')
    try {
      const pool = await sql.connect(dbSettings);
      console.log('Conexion exitosa');
      return pool;
    } catch (error) {
      console.log('Error en la conexión:',error);
      throw new Error('Servidor de base de datos no disponible');
    }
};

export default connection