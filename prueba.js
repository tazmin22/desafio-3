const express = require('express')

const app = express()
const port = 2020
app.use(express.urlencoded({ extended: true }));


const usuarios = [
  {id: "1" , nombre: "roberto", apellido: "gonzalez"},
  {id: "2" , nombre: "marta", apellido: "martinez"},
  {id: "1" , nombre: "jorge", apellido: "lanata"}

]



app.get('/', (req, res) => {
  
  res.send({usuarios});
});

app.get('/:idUsuarios', (req, res) => {
  let idUsuarios = req.params.idUsuarios;
  let usuario = usuarios.find( u=>u. id===idUsuarios);
  if (!usuario) return res.send({error: "usuario no encontrado"});
  res.send({usuario});
});

app.listen(port, () => {
  console.log("deberia funcionar")
})