import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import Loader from "./components/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setPosts(data.slice(0, 10));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>API Data Rendering</h1>
      <DataList data={posts} />
    </div>
  );
}

export default App;