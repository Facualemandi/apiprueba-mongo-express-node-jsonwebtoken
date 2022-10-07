import * as dotenv from "dotenv";
import "./database/connect.js";
import express from "express";
import authRoute from "./routes/authRoute.js";

const app = express();
app.use(express.json());

app.use("/api/v1", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on Port ${PORT}`));
