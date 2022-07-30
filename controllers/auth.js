const { request, response } = require('express');
// const User = require('../models/user.js');
const pool = require('../database/db')

const createUser = async (req = request, res = response) => {
    try {
        const { 
            email, 
            password, 
        } = req.body;

        const [result] = await pool.query(

        );


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