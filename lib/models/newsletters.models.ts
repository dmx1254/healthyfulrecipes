import mongoose from "mongoose";

const newslettersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    dealyrecipes:{
      type: Boolean,
      default: false,
    },
    nourishforweight:{
      type: Boolean,
      default: false,
    },
    plantPowered:{
      type: Boolean,
      default: false,
    },
    thePrep:{
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const NewsLettersModel =
  mongoose.models.newsletter || mongoose.model("newsletter", newslettersSchema);

export default NewsLettersModel;
