import { useEffect, useState } from "react";

export function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data: { status: string }) => setStatus(data.status))
      .catch(() => setStatus("server not reachable"));
  }, []);

  return (
    <main>
      <h1>Custom Branding</h1>
      <p>Server status: {status}</p>
    </main>
  );
}
