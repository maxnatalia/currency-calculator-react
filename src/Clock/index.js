import { useCurrentDate } from "./useCurrentDate.js";
import { StyledClock } from "./styled.js";

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
    <StyledClock>
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </StyledClock>
  );
};

export default Clock;