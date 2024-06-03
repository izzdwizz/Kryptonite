import mongoose from 'mongoose';

const { Schema } = mongoose;

const imageSchema = new Schema({
	data: {
		type: String,
		required: [true, 'Image data is required'],
	},
	apiKey: {
		type: String,
		required: [true, 'API key is required'],
	},
	dateUploaded: {
		type: Date,
		default: Date.now,
	},
});

const fileSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: [true, 'User reference is required'],
			index: true, // Adding index for faster query
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			lowercase: true, // Ensuring email is stored in lowercase
			validate: {
				validator: function (v) {
					// Simple email validation regex
					return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
				},
				message: (props) => `${props.value} is not a valid email address!`,
			},
		},
		dateCreated: {
			type: Date,
			default: Date.now,
		},
		images: {
			type: [imageSchema],
			default: [], // Default to an empty array
		},
	},
	{
		timestamps: true, // Automatically manage createdAt and updatedAt fields
	}
);

const File = mongoose.model('File', fileSchema);

export default File;
