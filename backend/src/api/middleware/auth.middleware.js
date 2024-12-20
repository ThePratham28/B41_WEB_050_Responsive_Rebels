import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = async (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		return res.status(401).json({
			message: "Unauthorized access",
		});
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decoded;
		next();
	} catch (error) {
		console.error("Error occurred in authMiddleware: ", error.message);
		res.status(401).json({
			message: "Unauthorized access",
		});
	}
};
