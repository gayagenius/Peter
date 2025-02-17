import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("Router has changed", router.asPath);
  }, [router]); // ✅ Include `router` in the dependency array

  return <div>Welcome to Dashboard</div>;
};

export default Dashboard;

  