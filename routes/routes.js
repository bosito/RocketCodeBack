const { Router } = require('express');
const authRoutes = require('./auth.js');

const router = Router();

router.use('/api/v1/auth', authRoutes);

module.exports = router;