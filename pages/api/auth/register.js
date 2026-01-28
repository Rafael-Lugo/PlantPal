import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import bcrypt from "bcrypt";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const { email, password, name } = request.body || {};

  if (!email || !password) {
    return response
      .status(400)
      .json({ message: "Email and password are required." });
  }

  if (password.length < 8) {
    return response
      .status(400)
      .json({ message: "Password must be at least 8 characters." });
  }

  await dbConnect();

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    return response.status(409).json({ message: "User already exists." });
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await User.create({
    email: email.toLowerCase(),
    passwordHash,
    name: name || "",
    provider: "credentials",
  });

  return response.status(201).json({
    message: "User created",
    user: { id: user._id.toString(), email: user.email, name: user.name },
  });
}
