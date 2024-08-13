const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

// Configure o CORS para permitir requisições do frontend
const corsOptions = {
  origin: 'http://localhost:3000', // Permitir apenas esta origem
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Permitir cookies e autenticação
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Use as rotas definidas no arquivo routes.js
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


