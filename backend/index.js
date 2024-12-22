import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./src/api/routes/auth.routes.js";
import portfolioRouter from "./src/api/routes/portfolio.routes.js";
import connectDB from "./src/config/dbConnection.js";

dotenv.config();

// console.log(process.env.PORT);
// console.log(process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/portfolio", portfolioRouter);

const PORT = process.env.PORT || 5000;

//Server start and mongodb connection
app.listen(PORT, async () => {
	try {
		await connectDB();
		console.log(`server started on http://localhost:${PORT}`);
	} catch (err) {
		console.error(err);
	}
});
