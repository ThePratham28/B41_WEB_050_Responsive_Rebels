import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		symbol: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true },
);

const portfolioSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	transactions: [transactionSchema],
});

export const Portfolio = model("Portfolio", portfolioSchema);
