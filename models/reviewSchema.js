import mongoose from 'mongoose';
const reviewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: { type: Number, required: true },
    likes: { type: Number },
    dislikes: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export { reviewSchema };
