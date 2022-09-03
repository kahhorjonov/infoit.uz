import PropTypes from 'prop-types';
import { FormControl, Icon, InputLabel, MenuItem, Select } from '@mui/material';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import { uploadPhoto } from 'store/thunk';

function CreateTestForm({
  name,
  price,
  image,
  active,
  startTestDate,
  finishTestDate,
  questionsCount,
  onChangeTestData,
  durationTimeInMinutes,
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
        required
      />
      <FormControl fullWidth focused required>
        <InputLabel id='active_select_id'>Active</InputLabel>
        <Select
          required
          labelId='active_select_id'
          value={active}
          onChange={e => onChangeTestData('active', e.target.value)}
          label='Active'
          style={{ height: '40px', padding: '2px' }}
        >
          <MenuItem value='true'>Active</MenuItem>
          <MenuItem value='false'>No active</MenuItem>
        </Select>
      </FormControl>
      <MDInput
        value={durationTimeInMinutes}
        onChange={e => onChangeTestData('durationTimeInMinutes', parseInt(e.target.value, 10))}
        label='Duration'
        placeholder='Duration'
        type='number'
        fullWidth
        focused
        required
      />
      <MDInput
        value={price}
        onChange={e => onChangeTestData('price', parseInt(e.target.value, 10))}
        label='Price'
        placeholder='Price'
        type='number'
        fullWidth
        focused
        required
      />
      <MDInput
        value={questionsCount}
        onChange={e => onChangeTestData('questionsCount', parseInt(e.target.value, 10))}
        label='Count'
        placeholder='Questions count'
        type='number'
        fullWidth
        focused
        required
      />
      <MDInput
        value={startTestDate}
        onChange={e => onChangeTestData('startTestDate', e.target.value)}
        label='Start Test'
        type='datetime-local'
        fullWidth
        focused
        required
      />
      <MDInput
        value={finishTestDate}
        onChange={e => onChangeTestData('finishTestDate', e.target.value)}
        label='Finish Test'
        type='datetime-local'
        fullWidth
        focused
        required
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
  active: PropTypes.bool,
  startTestDate: PropTypes.node,
  finishTestDate: PropTypes.node,
  questionsCount: PropTypes.number,
  onChangeTestData: PropTypes.func,
  durationTimeInMinutes: PropTypes.number,
};

export default CreateTestForm;
