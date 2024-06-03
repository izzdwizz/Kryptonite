import mongoose from 'mongoose';
import { isEmail } from 'validator';

const { Schema } = mongoose;

const apiKeySchema = new Schema(
	{
		key: {
			type: String,
			required: [true, 'API key is required'],
		},
		version: {
			type: Number,
			required: [true, 'API key version is required'],
		},
		invalidated: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: {
			createdAt: true,
			updatedAt: false,
		},
	}
);

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, 'Please enter an email'],
			unique: true,
			lowercase: true,
			validate: {
				validator: isEmail,
				message: 'Please enter a valid email',
			},
			index: true, // Add an index for performance
		},
		confirmed: {
			type: Boolean,
			default: false,
		},
		apiKeys: {
			type: [apiKeySchema],
			default: [],
		},
	},
	{
		timestamps: true, // Add createdAt and updatedAt fields for the user schema
	}
);

const User = mongoose.model('User', userSchema);

export default User;
