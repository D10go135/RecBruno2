const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const authMiddleware = require('./middleware/authMiddleware'); 

const app = express();
app.use(cors());
app.use(express.json());


app.use(authMiddleware);


app.use('/produtos', productRoutes);

module.exports = app;
