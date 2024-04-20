const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const products = require('./products');

app.use(cors());

app.use('/images', express.static('images'));

app.get('/product/:type/:category', (req, res) => {
  const { type, category } = req.params;

  if (products[type] && products[type][category]) {
    res.json(products[type][category]);
  } else {
    res.status(404).json({ error: 'Kategorie nicht gefunden' });
  }
});

app.get('/product/:type/:category/:product', (req, res) => {
  const { type, category, product } = req.params;

  if (products[type] && products[type][category] && products[type][category][product]) {
    res.json(products[type][category][product]);
  } else {
    res.status(404).json({ error: 'Produkt nicht gefunden' });
  }
});

app.get('/images/count/:product/:category', (req, res) => {
  const product = req.params.product;
  const category = req.params.category;
  const directoryPath = path.join('./images', product, category);

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Fehler beim Lesen des Verzeichnisses' });
    } else {
      const imageCount = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp')).length;
      res.json({ count: imageCount });
    }
  });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
