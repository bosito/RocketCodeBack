/*
    rutas de usurio / auth
    host * /api/v1/auth
*/

const { Router } = require('express');
const { check } = require('express-validator')
const {
    createUser,
    loginUsuario
} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/valudar-campos');

const auth = Router();

auth.post(
    '/register',
    [
        check("name", "El nomre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").isEmail(),
        validarCampos
    ],
    createUser
);

auth.post('/login',
    [
        check("email", "El email es obligatorio").isEmail(),
        check("password", "El password es obligatorio y mayor a 6 caracteres").isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario
);

module.exports = auth;