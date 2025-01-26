import { FC, PropsWithChildren } from "react";

const TitleMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2
      className="text-8xl font-thin text-white"
      style={{ letterSpacing: "0.2em" }}
    >
      {children}
    </h2>
  );
};

export default TitleMain;
