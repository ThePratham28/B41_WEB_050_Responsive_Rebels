import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const connectDB = async () => {
	try {
		//await connect(process.env.MONGO_URI);
		await connect("mongodb://localhost:27017/fintrackr_db");

		console.log(`MongoDB connected successfully`);
	} catch (error) {
		console.error(`Error: ${error}`);
		process.exit(1);
	}
};

export default connectDB;
