import { Router } from "express";

import {
	createPortfolio,
	addTransaction,
	updateTransaction,
	deleteTransaction,
	getPortfolio,
} from "../controllers/portfolio.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const portfolioRouter = Router();

portfolioRouter.get("/", authMiddleware, getPortfolio);
portfolioRouter.post("/", authMiddleware, createPortfolio);
portfolioRouter.post("/transaction", authMiddleware, addTransaction);
portfolioRouter.put(
	"/transaction/:transactionId",
	authMiddleware,
	updateTransaction,
);
portfolioRouter.delete(
	"/transaction/:transactionId",
	authMiddleware,
	deleteTransaction,
);

export default portfolioRouter;
