import express from "express";
import "dotenv/config.js";
import cors from "cors";
import connectDB from "./config/dbConnection.js";
import authRouter from "./api/routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

//Server start and mongodb connection
app.listen(PORT, () => {
	connectDB();
	console.log(`server started on http://localhost:${PORT}`);
});
