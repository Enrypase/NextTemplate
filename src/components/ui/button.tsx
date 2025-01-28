"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export function GoogleSignIn() {
  return (
    <button className={`text-black bg-white`} onClick={() => signIn("google")}>
      <p>Sign in with Google</p>
      <Image src="/icons/google.svg" alt="Google" width={24} height={24} />
    </button>
  );
}
