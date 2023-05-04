import "./App.css";
import axios from "axios";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("./tweets.json");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {data.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </>
  );
}

export default App;
