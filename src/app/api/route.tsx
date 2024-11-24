import { cookies } from "next/headers";

// Learn more @ https://nextjs.org/docs/app/building-your-application/routing/route-handlers
export async function GET(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  console.log("Tokens:", token);
  console.log(request);
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
