const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

//Port
const port = process.env.PORT || 5080;

//Routes
const productRouter = require("./routes/products");

//Middleware
app.use(express.json());
app.use("/products", productRouter);

//DB Connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected "));

//App listening to the port
app.listen(port, () => console.log(`App in is running on the port ${port}`));

