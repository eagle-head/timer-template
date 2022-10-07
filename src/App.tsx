import { FC, type PropsWithChildren } from "react";
import Timer from "./components/Timer";
import "./App.css";

const App: FC<PropsWithChildren> = () => {
  return (
    <div className="App">
      <Timer seconds={60} />
    </div>
  );
};

export { App };
