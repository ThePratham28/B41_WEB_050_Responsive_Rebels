import { connect } from "mongoose";

const connectDB = async () => {
	try {
		await connect("mongodb://localhost/fintrackr");

		console.log(`MongoDB connected successfully`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
