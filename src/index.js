const mongoose = require("mongoose");
const express = require("express");
const userRoute = require("./routes/user");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hola buenos dias");
});

//middleware
app.use("/api", userRoute);

//mongobd connection
mongoose
  .connect(process.env.MONGOBD_URI)
  .then(() => console.log("Conectado"))
  .catch(error => console.log(error));

app.listen(PORT, () => {
  console.log(`Corriendo en http://localhost:${PORT}`);
});
