import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <h1>Hello world</h1>
      </div>
    </>
  );
}

export default App;
