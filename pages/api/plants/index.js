import dbConnect from "@/db/connect";
import Plant from "@/db/models/Plant";
import { requireAuth } from "../_lib/requireAuth";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  await dbConnect();
  // await Plant.updateMany({ owner: { $exists: false } }, { $set: { owner: "default" } });


   if (request.method === "GET") {
    const token = await getToken({ req: request });
    const userId = token?.sub || null;

    const publicFilter = {
    $or: [{ owner: "default" }, { owner: { $exists: false } }],
  };

    const filter = userId
    ? { $or: [{ owner: userId }, ...publicFilter.$or] }
    : publicFilter;

    const plants = await Plant.find(filter).sort({ _id: -1 });
    return response.status(200).json(plants);
  }

  if (request.method === "POST") {
    const session = await requireAuth(request, response);
    if (!session) return;

    const token = await getToken({ req: request });
    const userId = token?.sub;

    if (!userId) {
      return response.status(401).json({ message: "Not authorized" });
    }
    
    try {
      const plantData = request.body;

      const PLACEHOLDER_IMAGE = {
      url: "/images/plant-placeholder.png",
      width: "600",
      height: "600",
      public_id: "placeholder",
    };

    if (
      !plantData.imageUrl ||
      !plantData.imageUrl.url ||
      !plantData.imageUrl.width ||
      !plantData.imageUrl.height ||
      !plantData.imageUrl.public_id
    ) {
      plantData.imageUrl = PLACEHOLDER_IMAGE;
    }

      await Plant.create({ ...plantData, owner: userId });

      response.status(201).json({ message: "Plant created successfully" });
    } catch (error) {
      console.error("Error creating plant:", error);
      response.status(400).json({ error: error.message });
    }
  }

  return response.status(405).json({ message: "Method not allowed" });
}
