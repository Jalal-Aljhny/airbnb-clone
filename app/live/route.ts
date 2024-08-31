import { liveData } from "./data";

export async function GET() {
  return Response.json(liveData);
}
