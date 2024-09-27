import app from './app.js';

//setting
app.set('port', process.env.PORT || 3000)

// Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Server UP on port', app.get('port'));    
})