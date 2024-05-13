import { useState, createContext, useContext } from "react";
// import dayjs from "dayjs";
import { intervalToDuration } from "date-fns";
import { useEffect } from "react";

const CountdownContext = createContext();

function CountdownProvider({ children }) {
  let { years, months, days, hours, minutes, seconds } = intervalToDuration({
    start: new Date(),
    end: new Date(Date.parse("04 Aug 2024 00:12:00 GMT-0300")),
  });

  if (years === undefined) years = "00";
  if (months === undefined) months = "00";
  if (months > 0) {
    days += months * 30;
  }
  if (days === undefined) days = "00";
  if (hours === undefined) hours = "00";
  if (minutes === undefined) minutes = "00";
  if (seconds === undefined) seconds = "00";

  console.log(years, months, days, hours, minutes, seconds);

  const [dummyCounter, setDummyCounter] = useState(1);
  let i = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      setDummyCounter(i++);
    }, 1000);

    return () => clearInterval(interval);
  }, [i]);

  return (
    <CountdownContext.Provider value={{ days, hours, minutes, seconds }}>
      {children}
    </CountdownContext.Provider>
  );
}

function useCountdown() {
  const context = useContext(CountdownContext);
  if (context === undefined)
    throw new Error(
      "CountdownContext was used outside of the CountdownProvider",
    );
  return context;
}

export { CountdownProvider, useCountdown };
