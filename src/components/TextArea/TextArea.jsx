import { Icon } from '@mui/material';
import MDInput from 'components/MDInput';
import PropTypes from 'prop-types';
import { uploadPhoto } from 'store/thunk';
import Styles from './TextArea.module.scss';

function TextArea({ formType, text, image, onChangeText, onAddImage, onDeleteImage }) {
  const handleChangeImage = async img => {
    const { attechmentId } = await uploadPhoto(img, 'QUESTION');
    onAddImage(attechmentId, URL.createObjectURL(img));
  };

  return (
    <div htmlFor='text_area' className={Styles.text_area_container}>
      {formType === 'view' ? (
        <span style={{ width: image ? '80%' : '100%' }} className={Styles.text}>
          {text}
        </span>
      ) : (
        <MDInput
          value={text}
          name='text_area'
          multiline
          fullWidth
          padding='1rem'
          sx={{
            width: '100%',
            fontSize: '1rem',
            padding: '0.5rem 0',
          }}
          onChange={e => onChangeText(e.target.value)}
        />

        // <textarea
        //   value={text}
        //   name='text_area'
        //   id='text_area'
        //   onChange={e => onChangeText(e.target.value)}
        // />
      )}
      {image ? (
        <div className={Styles.viewImage}>
          <img src={image} alt='' />
          {formType !== 'view' && (
            <button type='button' onClick={e => onDeleteImage(e)}>
              ×
            </button>
          )}
        </div>
      ) : (
        <label htmlFor='image' className={Styles.addImage}>
          {formType !== 'view' && <Icon fontSize='large'>image</Icon>}
          <input
            id='image'
            type='file'
            accept='image'
            onChange={e => handleChangeImage(e.target.files[0])}
          />
        </label>
      )}
    </div>
  );
}

TextArea.propTypes = {
  formType: PropTypes.string,
  text: PropTypes.string,
  onChangeText: PropTypes.func,
  onAddImage: PropTypes.func,
  onDeleteImage: PropTypes.func,
  image: PropTypes.string,
};

export default TextArea;
