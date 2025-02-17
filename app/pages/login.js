import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const { email } = router.query;

  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState(email || "");

  useEffect(() => {
    if (email) setUserEmail(email);
  }, [email]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", { email: userEmail, password });
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={userEmail} readOnly />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

