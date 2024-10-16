//import fs from 'fs';
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import beRoutes from './routers/be.routes.js'
import bsRoutes from './routers/bs.routes.js'
import bfRoutes from './routers/bf.routes.js'
import boRoutes from './routers/bo.routes.js'
import baRoutes from './routers/ba.routes.js'
import bncRoutes from './routers/bnc.routes.js'
import bnwRoutes from './routers/bnw.routes.js'
import loginRoutes from './routers/login.routes.js'
import logoutRoutes from './routers/logout.routes.js'
import photoRoutes from './routers/photo.routes.js'
import usuariosRoutes from './routers/usuarios.routes.js'
import listasdesplegableRoutes from './routers/listasdesplegable.routes.js'

const app = express();

// Middleware
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin : (origin, callback) => {        
        const ACCEPTED_ORIGINS = [
            'http://localhost:3000',
            'http://localhost:3100',
            'http://localhost:5173'
        ]

        if(ACCEPTED_ORIGINS.includes(origin) || !origin){
            return callback(null, true);
        }

        return callback(new Error('No permitido por CORS ' + origin + ' no está en la lista blanca'));
    },
    credentials: true,
    optionsSuccessStatus: 200,
}));
app.use(express.urlencoded({
    extended: true
}));

//seteamos la carpeta public para archivos estatios
app.use(express.static('./public'));

//Rutas
app.use('/api', beRoutes);
app.use('/api', bsRoutes);
app.use('/api', bfRoutes);
app.use('/api', boRoutes);
app.use('/api', baRoutes);
app.use('/api', bncRoutes);
app.use('/api', bnwRoutes);
app.use('/api', loginRoutes);
app.use('/api', logoutRoutes);
app.use('/api', photoRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', listasdesplegableRoutes);

app.get('*', (req, res) => {
    res.status(404).json({"error":404,message:"No se encontró la ruta solicitada"});
});

//Eliminacion de la cabecera x-powered-by
app.disable('x-powered-by');

//Para eliminar el cache y que no sepueda volver con el boton de back luego de quehacemos un logout
app.use((req, res, next) => {
    if (!req.user) {
        res.header('Cache-Control', 'private, no chache, no-store, must-revalidate');
    }
    next();
})

export default app;


/*fs.writeFile('./file.txt', text, (err) => {
  if (err) throw err;
});*/

// POST
// Crear un elemento desde cero

// PUT
// Actualizar un elemento existente o crearlo si no existe

// PATCH
// Actualizar parcialemnte un elemento existente