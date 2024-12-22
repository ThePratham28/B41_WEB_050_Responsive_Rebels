import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = async (req, res, next) => {
	try {
		const token = req.cookies.token;

		if (!token) {
			return res.status(401).json({
				message: "Unauthorized: No token provided",
			});
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ message: "Unauthorized - Invalid Token" });
		}

		req.user = decoded;

		next();
	} catch (error) {
		console.error("Error occurred in authMiddleware: ", error.message);
		res.status(500).json({
			message: "Server Error",
		});
	}
};
