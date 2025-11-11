import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await axios.post("/.netlify/functions/signup", { email, password });
  };

  const login = async () => {
    const res = await axios.post("/.netlify/functions/login", { email, password });
    localStorage.setItem("token", res.data.token);
  };

  return (
    <div className="retro-ui">
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
      <button onClick={signup}>Sign Up</button>
      <button onClick={login}>Login</button>
    </div>
  );
}
