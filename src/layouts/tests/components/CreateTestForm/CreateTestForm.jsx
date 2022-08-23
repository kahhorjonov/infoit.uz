import PropTypes from 'prop-types';
import { Icon } from '@mui/material';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import { uploadPhoto } from 'store/thunk';

function CreateTestForm({
  name,
  price,
  image,
  questionsCount,
  durationTimeInMinutes,
  startVisionTestDate,
  finishVisionTestDate,
  onChangeTestData,
}) {
  const handleGetImageId = async img => {
    const { attechmentId } = await uploadPhoto(img, 'TEST');

    onChangeTestData('image', { attachmentId: attechmentId, imageUrl: URL.createObjectURL(img) });
  };

  return (
    <MDBox display='flex' flexDirection='column' gap={2}>
      <MDTypography textAlign='center' textTransform='uppercase' fontWeight='bold'>
        Create Test
      </MDTypography>
      <MDInput
        value={name}
        onChange={e => onChangeTestData('name', e.target.value)}
        label='Name'
        placeholder='Test Name'
        type='text'
        fullWidth
        focused
      />
      <MDInput
        value={durationTimeInMinutes}
        onChange={e => onChangeTestData('durationTimeInMinutes', parseInt(e.target.value, 10))}
        label='Duration'
        placeholder='Duration'
        type='number'
        fullWidth
        focused
      />
      <MDInput
        value={price}
        onChange={e => onChangeTestData('price', parseInt(e.target.value, 10))}
        label='Price'
        placeholder='Price'
        type='number'
        fullWidth
        focused
      />
      <MDInput
        value={questionsCount}
        onChange={e => onChangeTestData('questionsCount', parseInt(e.target.value, 10))}
        label='Count'
        placeholder='Questions count'
        type='number'
        fullWidth
        focused
      />
      <MDInput
        value={startVisionTestDate && new Date(startVisionTestDate).toISOString().substr(0, 16)}
        onChange={e => onChangeTestData('startVisionTestDate', e.target.value)}
        label='Start Test'
        type='datetime-local'
        fullWidth
        focused
      />
      <MDInput
        value={finishVisionTestDate && new Date(finishVisionTestDate).toISOString().substr(0, 16)}
        onChange={e => onChangeTestData('finishVisionTestDate', e.target.value)}
        label='Finish Test'
        type='datetime-local'
        fullWidth
        focused
      />
      {image ? (
        <div style={{ position: 'relative' }}>
          <img
            style={{ borderRadius: '6px', border: '2px solid #2E87EC', padding: '2px' }}
            src={image}
            alt=''
          />
          <button
            onClick={() => onChangeTestData('image', { attachmentId: '', imageUrl: '' })}
            style={{
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '-7px',
              right: '-7px',
              fontSize: '1.3rem',
              background: '#2E87EC',
              borderRadius: '20px',
              color: 'white',
            }}
            type='button'
          >
            ×
          </button>
        </div>
      ) : (
        <label
          htmlFor='test_image'
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '2px solid #2E87EC',
            borderRadius: '6px',
            padding: '0.1rem 0.6rem',
            fontSize: '0.9rem',
          }}
        >
          Test cover <Icon fontSize='large'>image</Icon>
          <input
            onChange={e => handleGetImageId(e.target.files[0])}
            style={{ display: 'none' }}
            type='file'
            accept='image'
            id='test_image'
          />
        </label>
      )}
    </MDBox>
  );
}

CreateTestForm.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  questionsCount: PropTypes.number,
  onChangeTestData: PropTypes.func,
  startVisionTestDate: PropTypes.node,
  finishVisionTestDate: PropTypes.node,
  durationTimeInMinutes: PropTypes.number,
};

export default CreateTestForm;
