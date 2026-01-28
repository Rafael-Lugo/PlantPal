import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    setErrorMessage("");

    const loginResult = await signIn("credentials", {
      redirect: false,
      email: emailValue,
      password: passwordValue,
    });

    if (loginResult?.error) {
      setErrorMessage("Invalid email or password");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Email Login</h4>

      <input
        type="email"
        placeholder="Email"
        value={emailValue}
        onChange={(changeEvent) => setEmailValue(changeEvent.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={passwordValue}
        onChange={(changeEvent) => setPasswordValue(changeEvent.target.value)}
      />

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <button type="submit">Sign in</button>
    </form>
  );
}
