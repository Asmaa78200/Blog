const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"], // Corrected typo (requied -> required)
        },
        content: {
            type: String,
            required: [true, "Content is required"],
        },
        postedBy: {
            type: ObjectId,
            ref: "User",
        },
        image: {
            url: String,
            publicId: String, // Changed public-id to publicId
        },
        likes: [{
            type: ObjectId,
            ref: "User",
        }],
        comments: [
            {
                text: String,
                created: { type: Date, default: Date.now },
                postedBy: {
                    type: ObjectId,
                    ref: "User",
                },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema); // Corrected module.exports (modules -> module)
