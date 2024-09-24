import mongoose, { Document, Schema } from "mongoose";

interface INewsletter extends Document {
  email: string;
  fullname: string;
  plans: string[];
}

const newslettersSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      default: "",
    },
    plans: [
      {
        type: [String],
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const NewsLettersModel =
  mongoose.models.newsletter ||
  mongoose.model<INewsletter>("newsletter", newslettersSchema);

export default NewsLettersModel;
