const DIRECTUS_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";
const GOOGLE_ID = process.env.GOOGLE_ID || "";
const GOOGLE_SECRET = process.env.GOOGLE_SECRET || "";
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "";
if (!DIRECTUS_URL || !GOOGLE_ID || !GOOGLE_SECRET || !NEXTAUTH_SECRET) throw new Error("Required ENV not provided");
export { DIRECTUS_URL, GOOGLE_ID, GOOGLE_SECRET, NEXTAUTH_SECRET };
