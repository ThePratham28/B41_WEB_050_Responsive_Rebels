import { Schema, model } from "mongoose";

const userSchema = new Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		portfolio: {
			type: Schema.Types.ObjectId,
			ref: "Portfolio",
			default: null,
		},
	},
	{ timestamps: true },
);

export const User = model("User", userSchema);
