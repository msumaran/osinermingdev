
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('login');
});

app.get('/login', (req, res) => {
  res.render('login2');
});


app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/administrador', (req, res) => {
  res.render('administrador');
});

app.get('/administrador2', (req, res) => {
  res.render('administrador2');
});


app.get('/creacion_documentos', (req, res) => {
  res.render('creacion_documentos');
});
app.get('/creacion_documentos2', (req, res) => {
  res.render('creacion_documentos2');
});
app.get('/administradores', (req, res) => {
  res.render('administradores');
});
app.get('/administradores2', (req, res) => {
  res.render('administradores2');
});
app.get('/fechas_vencimiento', (req, res) => {
  res.render('fechas_vencimiento');
});
app.get('/revision_documentos', (req, res) => {
  res.render('revision_documentos');
});
app.get('/revision_documentos2', (req, res) => {
  res.render('revision_documentos2');
});
app.get('/revision_documentos3', (req, res) => {
  res.render('revision_documentos3');
});
app.get('/ayudanos_a_mejorar', (req, res) => {
  res.render('ayudanos_a_mejorar');
});
app.get('/ayudanos_a_mejorar2', (req, res) => {
  res.render('ayudanos_a_mejorar2');
});
app.get('/sliders', (req, res) => {
  res.render('sliders');
});
app.get('/preguntas_frecuentes', (req, res) => {
  res.render('preguntas_frecuentes');
});
app.get('/preguntas_frecuentes2', (req, res) => {
  res.render('preguntas_frecuentes2');
});
app.get('/configuracion', (req, res) => {
  res.render('configuracion');
});
app.get('/notificaciones', (req, res) => {
  res.render('notificaciones');
});
app.get('/notificaciones2', (req, res) => {
  res.render('notificaciones2');
});
app.get('/mis_documentos', (req, res) => {
  res.render('mis_documentos');
});

app.listen(3000);



module.exports = app;
