import { User } from "../../models/user.model.js";
import jwt from "jsonwebtoken";
import { hash, verify } from "argon2";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

//signup controller
export const signupUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const userExists = await User.findOne({ email });

		if (userExists) {
			return res.status(400).json({
				message: "User already exists",
			});
		}

		const hashedpasswd = await hash(password);

		const user = await User.create({ name, email, password: hashedpasswd });
		const token = jwt.sign({ id: user._id }, JWT_SECRET, {
			expiresIn: "1h",
		});

		res.status(201).json({ user, token });
	} catch (error) {
		console.error("Error occurred in signup: ", error.message);
		res.status(500).json({
			message: "Server Error",
		});
	}
};

export const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({
				message: "Invalid email or password",
			});
		}

		const validPassword = await verify(user.password, password);
		if (!validPassword) {
			return res.status(400).json({
				message: "Invalid email or password",
			});
		}

		const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
			expiresIn: "1h",
		});

		res.json({
			user,
			token,
		});
	} catch (error) {
		console.log(`Error occurred in login:`, error.message);
		res.status(500).json({ message: "Login failed", error });
	}
};
