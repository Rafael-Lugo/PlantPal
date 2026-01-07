import dbConnect from "@/db/connect";

export default async function handler(request, response) {
    await dbConnect();
    
    if (request.method === "GET") {
        const options = await PlantOption.find({ type: "plantOptions" });
        return response.status(200).json(options);
    }

    return response.status(405).json({ message: "Method not allowed" });
    
}