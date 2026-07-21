import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI?.trim();

const client = uri
  ? new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    })
  : null;

let cachedClient: MongoClient | null = null;

export default async function getMongoClient() {
  if (!client) {
    throw new Error("Please define MONGODB_URI in your environment variables.");
  }

  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = await client.connect();
  return cachedClient;
}
