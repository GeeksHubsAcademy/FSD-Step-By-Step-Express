// Instancio el elemento Router para poder usar las funciones de enrutado de Express
const router = require('express').Router();
// Importo los controladores que tengo dentro de mi carpeta de controladores y concretamente de mi archivo de controladores de autenticación
const authController = require('../controllers/userController')

router.get('/', authController.getAllUsers)

// Exporto para poder utilizar esto dentro del archivo router.js
module.exports = router;