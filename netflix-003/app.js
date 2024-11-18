const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;


app.get("/compras", (req, res) => {
  res.send("Bienvenido a la app de compras");
});


app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

//50.19.165.25:3000/api
//100.29.42.210:3001/api   
//3.87.192.117:3002/api