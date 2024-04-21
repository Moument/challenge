const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const shop = require('./shop');

app.use(cors());

app.use('/images', express.static('images'));

function sendJSON(res, data) {
  res.json(data);
}

function formatShopData(data) {
  const formattedData = {};
  Object.values(data).filter(item => typeof item === 'object').forEach((item, index) => {
    formattedData[index] = {
      name: item.name,
      url: item.url
    };
  });
  return formattedData;
}

// SHOP
app.get('/shop', (req, res) => {
  if (shop) {
    const types = formatShopData(shop);
    sendJSON(res, { types });
  } else {
    sendJSON(res, { error: 'Typen nicht gefunden' });
  }
});

app.get('/shop/:type', (req, res) => {
  const { type } = req.params;

  if (shop[type]) {
    const categories = formatShopData(shop[type]);
    sendJSON(res, {
      type: shop[type].name,
      categories: categories
    });
  } else {
    sendJSON(res, { error: 'Kategorie nicht gefunden' });
  }
});

app.get('/shop/:type/:category', (req, res) => {
  const { type, category } = req.params;

  if (shop[type] && shop[type][category]) {
    const products = {};
    Object.values(shop[type][category]).filter(product => typeof product === 'object').forEach((product, index) => {
      products[index] = {
        id: product.id,
        sizes: product.sizes,
        name: product.name,
        url: product.url,
        brandLogoPath: product.brandLogoPath,
        price: product.price,
        isNew: product.isNew,
        colors: product.colors
      };
    });
    sendJSON(res, {
      type: shop[type].name,
      category: shop[type][category].name,
      products: products
    });
  } else {
    sendJSON(res, { error: 'Kategorie nicht gefunden' });
  }
});

app.get('/shop/:type/:category/:name', (req, res) => {
  const { type, category, name } = req.params;

  if (shop[type] && shop[type][category] && shop[type][category][name]) {
    sendJSON(res, {
      type: type,
      category: category,
      product: shop[type][category][name]
    });
  } else {
    sendJSON(res, { error: 'Produkt nicht gefunden' });
  }
});

// COUNT IMAGES FOR PRODUCTS
app.get('/images/count/:product/:category', (req, res) => {
  const product = req.params.product;
  const category = req.params.category;
  const directoryPath = path.join('./images', product, category);

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      sendJSON(res, { error: 'Fehler beim Lesen des Verzeichnisses' });
    } else {
      const imageCount = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp')).length;
      sendJSON(res, { count: imageCount });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
