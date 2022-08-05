import { Icon } from "@mui/material";
import PropTypes from "prop-types";

import Styles from "./AddImage.module.scss";

function AddImage({ onChange }) {
  return (
    <label htmlFor="addImage" className={Styles.addImage}>
      <Icon fontSize="large">image</Icon>
      <input
        id="addImage"
        type="file"
        accept="image"
        onChange={(e) => onChange(URL.createObjectURL(e.target.files[0]))}
      />
    </label>
  );
}

AddImage.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default AddImage;
