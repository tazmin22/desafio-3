const express = require('express')
const {PManager} = require ("./ProductManager")
const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productos = new PManager ("./pruebas.json")

app.get('/productos',   async (req, res) => {
    let devolver = req.query;
      const productosADevolver= await productos.getProducts();    
    res.send({productos});
  });
  if (!limit || limit > productosADevolver.length) {
    res.status(200).json({
      status: 'ok',
      data: productosADevolver,
    });
  } else {
    res.status(200).json({
      status: 'ok',
      data: productosADevolver.slice(0, limit),
    });
  }

  app.listen(port, () => {
    console.log("Example app listening on port ${port}")
  })