require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');
const morgan = require('morgan');

const app = express();

// addConection();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando sobre el puerto ${PORT}`);
});
