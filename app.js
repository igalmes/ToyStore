const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const nodemailer = require('nodemailer');


const { initSession } = require('./src/utils/sessions');


//Variables de entorno:
require('dotenv').config();
const PORT = 3002;

//Importación de rutas:
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const faeRoutes = require('./src/routes/faeRouters');


//Template engines:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

//Definimos la carpeta para archivos estáticos (css, js, img):
app.use(express.static(path.join(__dirname, 'public')));




/*Creamos la session de usuario */
app.use(initSession());
/*Le pasamos a locals si el user esta logueado para aprovecharlo en las Vistas */
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
});



//Parseamos los datos recibidos con POST:
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Compatibilidad con métodos PUT y DELETE:
app.use(methodOverride('_method'));


const transporter = nodemailer.createTransport({
    service: 'gmail',  // gmail con AUTENTICACION DE 2 PASOS
    auth: {
        user: process.env.MAIL_USER,  // email
        pass: process.env.MAIL_PASS,  // credencial pass
    },
});


//Definición de rutas:
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/succes', faeRoutes);


//Middleware para manejar el error 404:
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});