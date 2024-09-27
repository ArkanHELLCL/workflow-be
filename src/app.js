//import fs from 'fs';
import express, { response } from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import router from './routers/router.js'

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

//Para eliminar el cache y que no sepueda volver con el boton de back luego de quehacemos un logout
app.use((req, res, next) => {
    if (!req.user) {
        res.header('Cache-Control', 'private, no chache, no-store, must-revalidate');
    }
    next();
})

//llamar al router con autenticacion ntlm
app.use('/', router)

export default app;


/*fs.writeFile('./file.txt', text, (err) => {
  if (err) throw err;
});*/