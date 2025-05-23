import { FC, PropsWithChildren } from "react";

const TitleMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1
      className="text-8xl font-thin text-white"
      style={{ letterSpacing: "0.2em" }}
    >
      {children}
    </h1>
  );
};

export default TitleMain;
