import { GoogleSignIn } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <GoogleSignIn />
    </div>
  );
}
