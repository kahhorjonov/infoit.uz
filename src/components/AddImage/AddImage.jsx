import { Icon } from '@mui/material';
import PropTypes from 'prop-types';
import { uploadPhoto } from '../../store/thunk';

import Styles from './AddImage.module.scss';

function AddImage({ label, onChange }) {
  const handleChangeImage = async img => {
    // const { attechmentId } = await uploadPhoto(img);

    onChange({ imageUrl: URL.createObjectURL(img) });
  };

  return (
    <label htmlFor={label} className={Styles.addImage}>
      <Icon fontSize='large'>image</Icon>
      <input
        id={label}
        type='file'
        accept='image'
        // onChange={e => onChange(e.target.files[0])}
        onChange={e => handleChangeImage(e.target.files[0])}
      />
    </label>
  );
}

AddImage.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddImage;
