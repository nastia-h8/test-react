import PropTypes from "prop-types";
// import clsx from "clsx";
import { Head } from "../Head/Head";
import defaultImg from "../default-image.jpg";
// import css from "./Card.module.css";
import { Container, Photo } from "./Card.styled";

export const Card = ({
  url = defaultImg,
  title = "Hello title",
  quantity,
  isOnline,
}) => {
  return (
    <Container>
      <Photo src={url} alt={title} />
      <div>
        <h4>Card Title: {title}</h4>
        {<Head id={123} />}
        <p>Quantity: {quantity < 10 ? "low in stock" : "in stock"}</p>
      </div>
    </Container>
  );
};

Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

// module
// export const Card = ({
//   url = defaultImg,
//   title = "Hello title",
//   quantity,
//   isOnline,
//   isOffline,
// }) => {
//   return (
//     <div
//     // className={
//     //   isOnline ? `${css.wrapper} ${css.violet}` : `${css.wrapper} ${css.teal}`
//     // }
//     // className={clsx(css.wrapper, isOnline ? css.violet : css.teal)}
//     // className={clsx(css.wrapper, {
//     //   [css.violet]: isOnline,
//     //   [css.teal]: isOffline,
//     // })}
//     >
//       <img src={url} alt={title} className={css.photo} />
//       <div>
//         <h4>Card Title: {title}</h4>
//         {<Head id={123} />}
//         <p>Quantity: {quantity < 10 ? "low in stock" : "in stock"}</p>
//       </div>
//     </div>
//   );
// };

// Card.propTypes = {
//   url: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   quantity: PropTypes.number.isRequired,
// };

// bootstrap
//   export const Card = ({ url = defaultImg, title='Hello title', quantity }) => {
//     return  <div className="card mx-auto my-2" style={{ width: "18rem" }} >
//           <img src={url} className="card-img-top" alt={title} />
//           <div className="card-body">
//               <h4 className="card-title">Card Title: {title}</h4>
//               {<Head id={123} className='card-text'/>}
//               <p>Quantity: {quantity<10? 'low in stock': 'in stock'}</p>
//           </div>
//       </div>
// }

// Card.propTypes = {
//   url: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   quantity: PropTypes.number.isRequired
// }
