import PropTypes from 'prop-types';
import { Icon } from '@mui/material';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import { uploadPhoto } from 'store/thunk';

function CreateTestForm({ onChangeTestData }) {
  const handleGetImageId = async image => {
    const { attechmentId } = await uploadPhoto(image);

    onChangeTestData('image', { attechmentId, imageUrl: URL.createObjectURL(image) });
  };

  return (
    <MDBox display='flex' flexDirection='column' gap={2}>
      <MDTypography textAlign='center' textTransform='uppercase' fontWeight='bold'>
        Create Test
      </MDTypography>
      <MDInput
        onChange={e => onChangeTestData('name', e.target.value)}
        label='Name'
        placeholder='Test Name'
        type='text'
        fullWidth
        focused
      />
      <MDInput
        onChange={e => onChangeTestData('durationTimeInMinutes', e.target.value)}
        label='Duration'
        placeholder='Duration'
        type='number'
        fullWidth
        focused
      />
      <MDInput
        onChange={e => onChangeTestData('price', e.target.value)}
        label='Price'
        placeholder='Price'
        type='number'
        fullWidth
        focused
      />
      <MDInput
        onChange={e => onChangeTestData('questionsCount', e.target.value)}
        label='Count'
        placeholder='Questions count'
        type='number'
        fullWidth
        focused
      />
      <MDInput
        onChange={e => onChangeTestData('startVisionTestDate', e.target.value)}
        label='Start Test'
        type='date'
        fullWidth
        focused
      />
      <MDInput
        onChange={e => onChangeTestData('finishVisionTestDate', e.target.value)}
        label='Finish Test'
        type='date'
        fullWidth
        focused
      />
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
    </MDBox>
  );
}

CreateTestForm.propTypes = {
  onChangeTestData: PropTypes.func,
};

export default CreateTestForm;
