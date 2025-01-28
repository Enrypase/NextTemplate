import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GOOGLE_ID, GOOGLE_SECRET, NEXTAUTH_SECRET } from "./vars";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      authorization: {
        params: {
          redirect_uri: "https://cms.staging.bysproject.co.uk/auth/login/google/callback",
        },
      },
    }),
  ],
  secret: NEXTAUTH_SECRET,
};
