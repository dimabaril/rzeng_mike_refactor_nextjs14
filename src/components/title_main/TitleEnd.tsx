import { SetStateAction, useRef, useState } from "react";
import localFont from "next/font/local";

const ichingFont = localFont({ src: "../../app/fonts/ICHING.woff2" });

// const startUnicode = 0x20;
// const endUnicode = 0x7e;

// const characters: string[] = [];
// for (let code = startUnicode; code <= endUnicode; code++) {
//   characters.push(String.fromCharCode(code));
// }

const TitleMain = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [currentChar, setCurrentChar] = useState("X");
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  const handleMouseEnter = () => {
    intervalIdRef.current = setInterval(() => {
      // setCurrentChar(characters[indexRef.current]);
      setCurrentChar(alphabet[indexRef.current]);
      // indexRef.current = (indexRef.current + 1) % characters.length;
      indexRef.current = (indexRef.current + 1) % alphabet.length;
    }, 300);
  };

  const handleMouseLeave = () => {
    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  };

  return (
    <h2
      className="text-8xl font-thin text-white"
      style={{ letterSpacing: "0.2em" }}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
    >
      0{/* <span className={`text-red-600 ${ichingFont.className}`}> */}
      <span className="text-red-600">{currentChar}</span>1
    </h2>
  );
};

export default TitleMain;
