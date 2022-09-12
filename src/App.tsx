import { FC } from "react";
import Timer from "./components/Timer";
import "./App.css";

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Timer time={3600} />
    </div>
  );
};

export { App };
