import { FC, useCallback, useEffect, useRef, useState, type PropsWithChildren } from "react";

interface Props {
  seconds: number;
}

const Timer: FC<PropsWithChildren<Props>> = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);
  const intervalRef = useRef<number | undefined>();
  const start = Date.now();

  const countdown = useCallback(() => {
    intervalRef.current = window.setInterval(() => {
      const tick = Math.floor((Date.now() - start) / 1000);

      return setTimeLeft(seconds - tick);
    }, 1000);
  }, [seconds, start]);

  const convertSecondsToMinutes = () => {
    const minutes = Math.floor(timeLeft / 60);
    const secondsRemaining = timeLeft % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secondsRemaining).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalRef.current);
    }

    if (!intervalRef.current) {
      countdown();
    }
  }, [countdown, timeLeft]);

  return <h1>{convertSecondsToMinutes()}</h1>;
};

export { Timer };
