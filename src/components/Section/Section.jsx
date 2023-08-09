import PropTypes from "prop-types";

export function Section({ title, children }) {
  return (
    <section>
      {title && <h2>{title} </h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  chidren: PropTypes.node,
};
