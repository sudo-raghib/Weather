const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const weatherRoutes = require("./routes/weatherRoutes");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

console.log(process.env.MONGODB_URI);

app.use("/api/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
