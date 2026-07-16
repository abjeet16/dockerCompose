import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8090/hello")
        .then((res) => res.text())
        .then((data) => setMessage(data));
  }, []);

  return (
      <div>
        <h1>Message from backend: {message}</h1>
      </div>
  );
}

export default App;