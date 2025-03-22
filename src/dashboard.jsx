import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function App() {
  const [text, setText] = useState("");
  const fullText = "Hi There, I'm Ryan Purnomo";
  const typingSpeed = 100; // Kecepatan mengetik (ms)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-white">
        {/* Animasi Mesin Ketik */}
        <p className="text-3xl font-mono">
          {text}
          <span className="animate-blink">|</span> {/* Kursor berkedip */}
        </p>

        {/* Tambahan Konten */}
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold">IOT + Fullstack Project</h4>
          <ul className="list-disc pl-5">
            <li><a href="https://monitoring-bbm.my.id" className="text-white no-underline hover:no-underline">Monitoring BBM</a></li>
            <li><a href="https://nutriducation" className="text-white no-underline hover:no-underline">Nutriducation</a></li>
          </ul>
        </div>
        <br />
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold">Fullstack Project</h4>
          <ul className="list-disc pl-5">
            <li></li>
          </ul>
        </div>
        <br/>
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold">Mobile App Project</h4>
          <ul className="list-disc pl-5">
            <li></li>
          </ul>
        </div>
        <br/>
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold">Game App Project</h4>
          <ul className="list-disc pl-5">
            <li><a href="https://9000-idx-chessboard-game-nuxt-1739723135641.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/" className="text-white no-underline hover:no-underline">ChessBoard Game</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
