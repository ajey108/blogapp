import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    authorImg: {
        type: String,
        required: true
    }
});

export default  mongoose.models.blog || mongoose.model("blog", Schema);
