// Recojo express para poder levantar un servidor
const express = require("express");
// Recojo la conexión a la base de datos que he hecho en el archivo db.js
const db = require("./db");
// Creo mi aplicación a partir de la instanciación de express
const app = express();
// Importo el router que estoy exportando desde el archivo router.js
const router = require('./router')
// Esto me permite utilizar bodys de tipo JSON - OJO, SIN ESTO NO FUNCIONARÁN LAS PETICIONES DE TIPO POST
app.use(express.json());
// Defino el puerto de conexión
const PORT = 3000;

// Voy a empezar a crear aquí los controladores que luego exportaré a sus propias carpetas

// Utilizo el router que me estoy importando desde router.js para hacer el enrutado de toda la aplicación
app.use(router)

// Si se ha realizado la conexión a la base de datos (que se está realizando en el archivo db.js)
db.then(() => {
  // ...entonces levanto el servidor e informo al usuario de lo que está ocurriendo
  app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
  });
})
  // Si hay un error, informo al usuario
  .catch((error) => console.error(error.message));
