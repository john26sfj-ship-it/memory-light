import StartButton from "./components/StartButton";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const colors = [`#2B4E64`, `#2E6583`, `#4F7C91`, `#6F9AAB`];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setColorIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % colors.length;
        document.documentElement.style.setProperty(
          `--body-bg-color`,
          colors[newIndex],
        );
        return newIndex;
      });
    }, 4000);
    return () => clearInterval(intervalID);
  }, [colors]);

  return (
    <>
      <StartButton />
    </>
  );
}

export default App;

// Test comment
