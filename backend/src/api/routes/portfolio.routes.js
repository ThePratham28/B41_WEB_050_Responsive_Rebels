import { Router } from "express";

import {
	createPortfolio,
	addTransaction,
	updateTransaction,
	deleteTransaction,
} from "../controllers/portfolio.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const portfolioRouter = Router();

portfolioRouter.post("/", authMiddleware, createPortfolio); // Create portfolio
portfolioRouter.post("/transaction", authMiddleware, addTransaction); // Add transaction
portfolioRouter.put(
	"/transaction/:transactionId",
	authMiddleware,
	updateTransaction,
); // Update transaction
portfolioRouter.delete(
	"/transaction/:transactionId",
	authMiddleware,
	deleteTransaction,
); // Delete transaction

export default portfolioRouter;
