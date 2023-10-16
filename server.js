const express = require('express');
const cors = require('cors');
const app = express();

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:5000',
};

// Middleware to enable CORS
app.use(cors(corsOptions));

// Parse JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
const productRouter = require('./routes/product')
const reviewRouter = require("./routes/review")
app.use("/product",productRouter)
app.use("/review",reviewRouter)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
