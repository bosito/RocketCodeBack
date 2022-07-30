const { request, response } = require('express');
// const User = require('../models/user.js');
const pool = require('../database/db')

const createUser = async (req = request, res = response) => {
    try {
        const { 
            email, 
            segundo_nombre,
            apellido_paterno,
            profile_image,
            phone,
            nombre
        } = req.body;

        const [result] = await pool.query(
            'INSERT INTO users_test_jose_luis_jimenez_vazquez(nombre, segundo_nombre, apellido_paterno, email, profile_image, phone) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nombre, segundo_nombre, apellido_paterno, email, profile_image, phone]
        );

        res.status(201).json({
            ok: true,
            id: result.insertId,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'por favor comunicarse con el administrador'
        });
    };
};

const loginUsuario = async (req = request, res = response) => {
    try {
        

        res.status(201).json({
            ok: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'por favor comunicarse con el administrador'
        });
    };
};

module.exports = {
    createUser,
    loginUsuario
}