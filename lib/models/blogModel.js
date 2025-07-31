import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: String,
  text: String,
  date: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 5, maxlength: 100 },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    authorImg: { type: String, required: true },
    like: { type: Number, default: 200 },
    comment: [commentSchema],
  },
  { timestamps: true }
);

export default mongoose.models.blog || mongoose.model("blog", blogSchema);
