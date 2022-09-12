import { FC, useEffect, useState } from "react";

interface State {
  time: number;
  minutes: number;
  seconds: number;
}

interface Props {
  time: number;
}

const Timer: FC<Props> = ({ time }): JSX.Element => {
  //   time += 1;
  const [state, setState] = useState<State>({
    time: (time += 1),
    minutes: Math.floor((time - 1) / 60),
    seconds: time - Math.floor((time - 1) / 60) * 60 - 1,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prevState) => ({
        time: prevState.time - 1,
        minutes: Math.floor((prevState.time - 1) / 60),
        seconds:
          prevState.time - Math.floor((prevState.time - 1) / 60) * 60 - 1,
      }));
    }, 1000);

    console.log(state.time);

    if (state.time === 0) {
      return clearTimeout(timer);
    }
  }, [state.time]);

  return (
    <h1>
      {`${state.minutes}:${
        state.seconds < 10 ? `0${state.seconds}` : state.seconds
      }`}
    </h1>
  );
};

export { Timer };
