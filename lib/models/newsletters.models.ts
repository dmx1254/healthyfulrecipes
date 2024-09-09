import mongoose from "mongoose";

const newslettersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const NewsLettersModel =
  mongoose.models.newsletter || mongoose.model("newsletter", newslettersSchema);

export default NewsLettersModel;
