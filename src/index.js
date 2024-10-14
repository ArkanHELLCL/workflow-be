import http from 'http'
//import https from 'https'
import { Server as SocketServer } from 'socket.io'
import app from './app.js';

//setting
app.set('port', process.env.PORT || 3000)

//http[s] server
const server = http.createServer(app);
/*const server = https.createServer({    
    pfx: fs.readFileSync( './certs/mi_certificado.pfx'),    
    passphrase: 'Josefina123'
}, app)*/

//Socket.io
const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:5173",
        //methods: ["GET", "POST"]
    }
})

//listener
try{
    io.on('connection', (socket) => {
        console.log('Usuario conectado', socket.id)
        socket.on('disconnect', () => {
            console.log('Usuario desconectado', socket.id)
        })
        socket.on('mensaje', (data) => {
            console.log(data)
            socket.broadcast.emit('mensaje', {
                body: 'Hola a todos',
                from: socket.id
            })
            //io.emit('mensaje', data)
        })
    })
}
catch(error){
    console.log('Error en socket.io', error)
}

// Iniciar servidor
//app.listen(app.get('port'), () => {
server.listen(app.get('port'), () => {
    console.log('Server UP on port', app.get('port'));    
})