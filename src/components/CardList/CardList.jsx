import PropTypes from "prop-types";
import { Card } from "../Card/Card";

export const CardList = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, url, title, quantity }) => (
        <li key={id}>
          {
            <Card
              url={url}
              title={title}
              id={id}
              quantity={quantity}
              isOnline
            />
          }
        </li>
      ))}
    </ul>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
