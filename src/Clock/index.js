import { useCurrentDate } from "./useCurrentDate.js";
import "./style.css";

const formatDate = (date) => {
  return date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

const Clock = () => {
  const date = useCurrentDate();

  return (
    <div className="clock">
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </div>
  );
};

export default Clock;