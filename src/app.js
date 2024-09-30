//import fs from 'fs';
import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import beRoutes from './routers/be.routes.js'
import bsRoutes from './routers/bs.routes.js'

const app = express();

// Middleware
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//seteamos la carpeta public para archivos estatios
app.use(express.static('./public'));

//Rutas
app.use('/api', beRoutes);
app.use('/api', bsRoutes);

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