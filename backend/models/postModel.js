const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            requied: [true, "title is required"],
        },
        content: {
            type : String,
            required: [true, "content is required"],
        },
        postedBy: {
            type: ObjectId,
            ref: "Use",
        },
        image: {
            url: String,
            public-id: String,
        },
        likes: [{
            type: ObjectId, ref:"User"}],
        comments: [
            {
                text: String,
                created: { type: Date, default: Date.now},
                postedBy: {
                    type: ObjectId,
                    ref: "User",
                },
            },
        ],

    },
    {timestamps: true}
);

modules.exports = mongoose.model('post',postSchema);