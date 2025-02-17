import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setUser(jwtDecode(token));
    }
  }, []);

  return user ? <h2>Welcome, {user.email}!</h2> : <h2>Loading...</h2>;
}

  