import PropTypes from "prop-types";

export const Head = (props) => {
  const { id } = props;
  return <h5 id={id}>I am Head</h5>;
};

Head.propTypes = {
  id: PropTypes.number.isRequired,
};
