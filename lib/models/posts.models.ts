import mongoose, { Schema, Document } from "mongoose";

// Interface for Post document
interface IPost extends Document {
  title: string;
  category: mongoose.Types.ObjectId;
  postId: string;
  slug: string;
  postImage: string;
  rate: number;
  recipes: string[];
  nutritions: string[];
  decription: string[];
  ingredients: string[];
  nutritionInformation: string[];
}

// Interface for Category document
interface ICategory extends Document {
  title: string;
  catId: string;
  slug: string;
  posts: IPost[];
}

// Schema for Post
const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "category", required: true },
    postId: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    postImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Schema for Category
const CategorySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    catId: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
  },
  {
    timestamps: true,
  }
);

// Create models
const PostModel =
  mongoose.models.post || mongoose.model<IPost>("post", PostSchema);
const CategoryModel =
  mongoose.models.category ||
  mongoose.model<ICategory>("category", CategorySchema);

export { PostModel, CategoryModel };
