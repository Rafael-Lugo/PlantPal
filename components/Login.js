import Github from "next-auth/providers/github";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        Signed in as {session.user.email || session.user.name}
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div>
      Not signed in
      <button type="button" onClick={() => signIn("github")}>
        Sign in with GitHub
      </button>
    </div>
  );
}
