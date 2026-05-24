const express = require('express');

const cors = require('cors');

const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./swagger/swaggerConfig');

const clientesRoutes = require('./routes/clientesRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', clientesRoutes);

module.exports = app;