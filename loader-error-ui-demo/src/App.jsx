import { useState } from "react";
import Loader from "./components/Loader";
import ErrorView from "./components/ErrorView";
import ProfileCard from "./components/ProfileCard";

function fetchMockData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({
          name: "Belva",
          role: "Frontend Developer",
          email: "belva@gmail.com"
        });
      } else {
        reject("Failed to fetch user data.");
      }
    }, 2000);
  });
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = () => {
    setIsLoading(true);
    setError(null);
    setData(null);

    fetchMockData()
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  if (isLoading) return <Loader />;
  if (error) return <ErrorView message={error} retry={handleFetch} />;
  if (data) return <ProfileCard data={data} />;

  return (
    <div className="container">
      <h1>Loader & Error UI Demo</h1>
      <button onClick={handleFetch}>Fetch Profile</button>
    </div>
  );
}

export default App;