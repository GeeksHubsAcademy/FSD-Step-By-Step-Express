// Instancio el elemento Router para poder usar las funciones de enrutado de Express
const router = require('express').Router();
// Importo los controladores que tengo dentro de mi carpeta de controladores y concretamente de mi archivo de controladores de autenticación
const authController = require('../controllers/userController')
// Importo el middleware para asegurar que solo pueda traerme todos los usuarios si estoy logueado
const authMiddleware = require('../middlewares/verifyToken')

// Introduzco el middleware como argumento previo al controlador. Recordemos que hacemos uso de next() para dar paso al controlador siguiente.
router.get('/', authMiddleware, authController.getAllUsers)
router.put('/profile', authMiddleware, authController.updateUser)
// Exporto para poder utilizar esto dentro del archivo router.js
module.exports = router;