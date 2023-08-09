import PropTypes from "prop-types";
// import css from "./EventBoard.module.css";
import { EventCard } from "../EventCard/EventCard";
import { EventBoardContainer } from "./EventBoard.styled";

export const EventBoard = ({ events }) => {
  return (
    <EventBoardContainer>
      {events.map(({ name, location, speaker, type, time }) => (
        <EventCard
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        ></EventCard>
      ))}
    </EventBoardContainer>
  );
};

// export const EventBoard = ({ events }) => {
//   return (
//     <div className={css.eventBoard}>
//       {events.map(({ name, location, speaker, type, time }) => (
//         <EventCard
//           key={name}
//           name={name}
//           location={location}
//           speaker={speaker}
//           type={type}
//           start={time.start}
//           end={time.end}
//         ></EventCard>
//       ))}
//     </div>
//   );
// };

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};
