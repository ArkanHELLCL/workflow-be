import sql from 'mssql/msnodesqlv8.js'

process.loadEnvFile();
const dbSettings = {
    driver: 'msnodesqlv8',

    //user: process.env.DB_USER,
    //password: process.env.DB_PASSWORD,

    server: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    options: {      
      trustedConnection: true
    },
    pool: {
        idleTimeoutMillis: 100000
    }
}
const connection = async () => {
    console.log('Conectando a la BD')
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