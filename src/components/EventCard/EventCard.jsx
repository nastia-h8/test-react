import PropTypes from "prop-types";
// import { formatEventTimeStart } from "../../utils/formatEventTimeStart";
// import { formatEventDuration } from "../../utils/formatEventDuration";
import { formatEventTimeStart, formatEventDuration } from "../../utils/";
import { iconSize } from "../../constants";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
// import css from "./EventCard.module.css";
import { Card, EventTitle, Info, Chip } from "./EventCard.styled";

export const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formattedEventTimeStart = formatEventTimeStart(start);
  const formattedEventDuration = formatEventDuration(start, end);

  return (
    <Card>
      <EventTitle>{name}</EventTitle>
      <Info>
        <FaMapMarkerAlt size={iconSize.md} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.md} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.md} />
        {formattedEventTimeStart}
      </Info>
      <Info>
        <FaClock size={iconSize.md} />
        {formattedEventDuration}
      </Info>
      <Chip type={type}>{type}</Chip>
    </Card>
  );
};
// className={`${css.chip} ${css[type]}`}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

//css module template string
// export const EventCard = ({ name, location, speaker, type, start, end }) => {
//   const formattedEventTimeStart = formatEventTimeStart(start);
//   const formattedEventDuration = formatEventDuration(start, end);

//   return (
//     <div className={css.event}>
//       <h2 className={css.title}>{name}</h2>
//       <p className={css.info}>
//         <FaMapMarkerAlt className={css.icon} size={iconSize.md} />
//         {location}
//       </p>
//       <p className={css.info}>
//         <FaUserAlt className={css.icon} size={iconSize.md} />
//         {speaker}
//       </p>
//       <p className={css.info}>
//         <FaCalendarAlt className={css.icon} size={iconSize.md} />
//         {formattedEventTimeStart}
//       </p>
//       <p className={css.info}>
//         <FaClock className={css.icon} size={iconSize.md} />
//         {formattedEventDuration}
//       </p>
//       <span className={`${css.chip} ${css[type]}`}>{type}</span>
//     </div>
//   );
// };

// EventCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   start: PropTypes.string.isRequired,
//   end: PropTypes.string.isRequired,
// };
