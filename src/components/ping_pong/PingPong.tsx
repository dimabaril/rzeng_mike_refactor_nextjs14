import { ReactNode, useEffect, useState } from "react";

const getRandomPosition = () => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  return { top: `${top}%`, left: `${left}%` };
};

const getRandomSize = () => {
  const size = Math.random() * 5 + 15;
  return { width: `${size}%`, height: `${size}%` };
};

const getRandomDuration = () => {
  return Math.random() * 10 + 15;
};

const PingPong = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState(getRandomPosition());
  const [size, setSize] = useState(getRandomSize());
  const [duration, setDuration] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
      setSize(getRandomSize());
      setDuration(getRandomDuration());
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      className="absolute z-10"
      style={{
        top: position.top,
        left: position.left,
        width: size.width,
        height: size.height,
        transition: `all ${duration}s ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

export default PingPong;
