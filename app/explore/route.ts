import { exploreData } from "./data";

export async function GET() {
  return Response.json(exploreData);
}
