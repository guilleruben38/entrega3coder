const express = require('express');
const app = express();

const products = [
    { id: 1, name: "Product 1",  price: 11 },
    { id: 2, name: "Product 2",  price: 12 },
    { id: 3, name: "Product 3",  price: 13 },
    { id: 4, name: "Product 4",  price: 14 },
    { id: 5, name: "Product 5",  price: 15 },
    { id: 6, name: "Product 6",  price: 16 },
    { id: 7, name: "Product 7",  price: 17 },
    { id: 8, name: "Product 8",  price: 18 },
    { id: 9, name: "Product 9",  price: 19 },
    { id: 9, name: "Product 10", price: 20 }
]




app.get('/', (req, res) => {
   res.send(products)
});


app.get('/products/:id', (req, res) => {
    const id = +req.params.id;
    const product = products.find(product => product.id == id);

  if(!product) {
    res.send({error: "producto no encontrado."})
   
  }
    res.send(product);
});



app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const limitedProducts = limit ? products.slice(0, limit) : products;
   
   res.json(limitedProducts);
  });
 
 
 app.listen(8083, () => {
   console.log('servidor escuchando en el puerto 8083');
 });






