import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String },
    name: { type: String, default: "" },
    image: { type: String, default: "" },
    provider: { type: String, default: "credential" },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
