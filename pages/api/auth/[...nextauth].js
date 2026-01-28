import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import bcrypt from "bcrypt";

export const authOptions = {
  session: { strategy: "jwt" },

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase();
        const password = credentials?.password;

        if (!email || !password) return null;

        await dbConnect();
        const user = await User.findOne({ email });

        if (!user || !user.passwordHash) return null;

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name || user.email,
          image: user.image || null,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user?.id) token.sub = user.id;

      if (account?.provider === "github" && token?.email) {
        await dbConnect();
        const email = token.email.toLowerCase();

        await User.updateOne(
          { email },
          {
            $setOnInsert: { email, provider: "github" },
            $set: {
              name: token.name || "",
              image: token.picture || "",
            },
          },
          { upsert: true }
        );

        const dbUser = await User.findOne({ email });
        if (dbUser?._id) token.sub = dbUser._id.toString();
      }

      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
