import { Portfolio } from "../../models/portfolio.model.js";
import { User } from "../../models/user.model.js";

export const createPortfolio = async (req, res) => {
	try {
		const user = await User.findById(req.user.id);
		if (!user) {
			return res.status(404).json({
				message: "User not found",
			});
		}

		if (user.portfolio) {
			return res.status(400).json({
				message: "Portfolio already exists",
			});
		}

		const portfolio = await Portfolio.create({
			user: user._id,
			transactions: [],
		});
		user.portfolio = portfolio._id;
		await user.save();

		res.status(201).json({
			message: "Portfolio created successfully",
			portfolio,
		});
	} catch (error) {
		console.error("Error occurred in createPortfolio: ", error.message);
		res.status(500).json({
			message: "Failed to create portfolio",
			error: error.message,
		});
	}
};

export const addTransaction = async (req, res) => {
	try {
		const { type, symbol, quantity, price } = req.body;

		const portfolio = await Portfolio.findOne({ user: req.user.id });
		if (!portfolio) {
			return res.status(404).json({
				message: "Portfolio not found",
			});
		}

		const transaction = {
			type,
			symbol,
			quantity,
			price,
		};
		portfolio.transactions.push(transaction);
		await portfolio.save();

		res.status(201).json({
			message: "Transaction added successfully",
			transaction,
		});
	} catch (error) {
		console.error("Error occurred in addTransaction: ", error.message);
		res.status(500).json({
			message: "Failed to add transaction",
			error: error.message,
		});
	}
};

export const updateTransaction = async (req, res) => {
	try {
		const { type, symbol, quantity, price } = req.body;
		const { transactionId } = req.params;

		const portfolio = await Portfolio.findOne({ user: req.user.id });
		if (!portfolio) {
			return res.status(404).json({
				message: "Portfolio not found",
			});
		}

		const transaction = portfolio.transactions.id(transactionId);
		if (!transaction) {
			return res.status(404).json({
				message: "Transaction not found",
			});
		}

		transaction.type = type || transaction.type;
		transaction.symbol = symbol || transaction.symbol;
		transaction.quantity = quantity || transaction.quantity;
		transaction.price = price || transaction.price;
		await portfolio.save();

		res.json({
			message: "Transaction updated successfully",
			portfolio,
		});
	} catch (error) {
		console.error("Error occurred in updateTransaction: ", error.message);
		res.status(500).json({
			message: "Failed to update transaction",
			error: error.message,
		});
	}
};

export const deleteTransaction = async (req, res) => {
	try {
		const { transactionId } = req.params;

		const portfolio = await Portfolio.findOne({ user: req.user._id });
		if (!portfolio) {
			return res.status(404).json({
				message: "Portfolio not found",
			});
		}

		portfolio.transactions = portfolio.transactions.filter(
			(transaction) => transaction._id.toString() !== transactionId,
		);
		await portfolio.save();

		res.json({
			message: "Transaction deleted successfully",
			portfolio,
		});
	} catch (error) {
		console.error("Error occurred in deleteTransaction: ", error.message);
		res.status(500).json({
			message: "Failed to delete transaction",
			error: error.message,
		});
	}
};
