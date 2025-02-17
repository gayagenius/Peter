import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRedirect = () => {
    if (email) {
      router.push(`/login?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <div className="container">
      <h2>Login Link</h2>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleRedirect}>Go to Login</button>
    </div>
  );
}
