import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";

export default async function UserPage() {
  const session = (await getServerSession(authOptions))!;
  console.log(session);
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="capitalize">Hello {session.user.name}</h2>
    </div>
  );
}
