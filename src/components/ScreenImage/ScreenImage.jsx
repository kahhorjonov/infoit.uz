import PropTypes from "prop-types";
import Styles from "./ScreenImage.module.scss";

function ScreenImage({ img, onDelete }) {
  return (
    <div className={Styles.screenImage}>
      <img src={img} alt="" />
      <button type="button" onClick={() => onDelete(img)}>
        ×
      </button>
    </div>
  );
}

ScreenImage.propTypes = {
  img: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ScreenImage;
