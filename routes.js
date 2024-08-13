const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data');

// Helper function to read JSON files
const readJSONFile = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};


// Endpoint para obter todos os países
router.get('/countries', (req, res) => {
    const countries = readJSONFile(`${dataPath}/countrys.json`);
    res.json(countries);
  });
  
  // Endpoint para obter todos os estados de um país
  router.get('/states/:countryId', (req, res) => {
    const { countryId } = req.params;
    const states = readJSONFile(`${dataPath}/states.json`);
    const filteredStates = states.filter(state => state.id_country === parseInt(countryId));
    res.json(filteredStates);
  });
  
  // Endpoint para obter todas as cidades de um estado
  router.get('/cities/:stateId', (req, res) => {
    const { stateId } = req.params;
    const cities = readJSONFile(`${dataPath}/citys.json`);
    const filteredCities = cities.filter(city => city.id_state === parseInt(stateId));
    res.json(filteredCities);
  });
  
  // Endpoint para obter estados de um país específico da pasta /country
  router.get('/country/:countryName/states', (req, res) => {
    const { countryName } = req.params;
    const countryDataPath = path.join(dataPath, 'country', countryName, 'states.json');
    
    if (fs.existsSync(countryDataPath)) {
      const states = readJSONFile(countryDataPath);
      res.json(states);
    } else {
      res.status(404).json({ message: 'States data not found' });
    }
  });
  
  // Endpoint para obter cidades de um país específico da pasta /country
  router.get('/country/:countryName/cities', (req, res) => {
    const { countryName } = req.params;
    const countryDataPath = path.join(dataPath, 'country', countryName, 'citys.json');
    
    if (fs.existsSync(countryDataPath)) {
      const cities = readJSONFile(countryDataPath);
      res.json(cities);
    } else {
      res.status(404).json({ message: 'Cities data not found' });
    }
  });
  
  // Endpoint para obter cidades de um estado específico dentro de um país específico da pasta /country
  router.get('/country/:countryName/:stateName/cities', (req, res) => {
    const { countryName, stateName } = req.params;
    const stateDataPath = path.join(dataPath, 'country', countryName, stateName, 'citys.json');
    
    if (fs.existsSync(stateDataPath)) {
      const cities = readJSONFile(stateDataPath);
      res.json(cities);
    } else {
      res.status(404).json({ message: 'State or cities data not found' });
    }
  });



router.post('/check-email', (req, res) => {
    const { email } = req.body;
    const existingEmails = ['joelvieirasouza@email.com', 'example@example.com']; // Mock de emails existentes
  
    if (existingEmails.includes(email)) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  });
  
  module.exports = router;