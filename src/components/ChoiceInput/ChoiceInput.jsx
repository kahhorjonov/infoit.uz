import { Icon } from '@mui/material';
import MDInput from 'components/MDInput';
import PropTypes from 'prop-types';
import { uploadPhoto } from 'store/thunk';
import Styles from './ChoiceInput.module.scss';

function ChoiceInput({
  idx,
  formType,
  correct,
  placeholder,
  text,
  choicePhoto,
  onChangeText,
  onAddAnswer,
  onDeleteAnswer,
  onAddImage,
}) {
  const handleChangeImage = async img => {
    const { attechmentId } = await uploadPhoto(img, 'QUESTION');
    onAddImage(idx, attechmentId, URL.createObjectURL(img));
  };

  return (
    <div className={`${Styles.input_container}`}>
      {/* {formType !== 'view' && (
        <input
          // value={correct ? 'on' : ''}
          defaultChecked={correct === true ? 'true' : 'false'}
          type='radio'
          name='correctChoice'
          onClick={() => onChangeText(idx, 'correct', !correct)}
        />
      )} */}
      {choicePhoto ? (
        <div className={Styles.viewImage}>
          <img src={choicePhoto} alt='' />
          {formType !== 'view' && (
            <button type='button' onClick={() => onAddImage(idx, null, '')}>
              ×
            </button>
          )}
        </div>
      ) : (
        <label htmlFor={`label_${idx}`} className={Styles.addImage}>
          {formType !== 'view' && <Icon fontSize='large'>image</Icon>}
          <input
            id={`label_${idx}`}
            type='file'
            accept='image'
            onChange={e => handleChangeImage(e.target.files[0])}
          />
        </label>
      )}
      {formType === 'view' ? (
        <span className={Styles.text}>{text}</span>
      ) : (
        <>
          <MDInput
            value={text}
            name='text_area'
            id='input'
            type='text'
            multiline
            fullWidth
            padding='1rem'
            sx={{
              width: '100%',
              fontSize: '1rem',
            }}
            placeholder={placeholder}
            onChange={e => onChangeText(idx, 'text', e.target.value)}
          />
          {/* <input
            value={text}
            id='input'
            type='text'
            className={Styles.input}
            placeholder={placeholder}
            onChange={e => onChangeText(idx, 'text', e.target.value)}
          /> */}

          <Icon
            fontSize='large'
            color={correct ? 'success' : 'secondary'}
            onClick={() => onChangeText(idx, 'correct', !correct)}
          >
            check
          </Icon>
          <Icon fontSize='large' color='secondary' onClick={() => onAddAnswer()}>
            add
          </Icon>
          <Icon fontSize='large' color='secondary' onClick={() => onDeleteAnswer(idx)}>
            remove
          </Icon>
        </>
      )}
    </div>
  );
}

ChoiceInput.propTypes = {
  idx: PropTypes.node,
  formType: PropTypes.string,
  text: PropTypes.string,
  choicePhoto: PropTypes.string,
  correct: PropTypes.bool,
  placeholder: PropTypes.string,
  onAddAnswer: PropTypes.func,
  onDeleteAnswer: PropTypes.func,
  onChangeText: PropTypes.func,
  onAddImage: PropTypes.func,
};

export default ChoiceInput;
