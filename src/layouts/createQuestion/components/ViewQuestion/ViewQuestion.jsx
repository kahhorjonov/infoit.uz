import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Icon } from '@mui/material';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
// import Styles from './ViewQuestion.module.scss';

const choices = [
  {
    id: 1,
    name: 'Answer 1',
    correct: true,
    choicePhoto:
      'https://odam.uz/upload/media/posts/2019-11/30/miyamizni-aldab-qo-yishi-mumkin-bo-lgan-8-ta-rasm-sinchkovroq-bo-ling_1575125501-b.jpg',
  },
  {
    id: 2,
    name: 'Answer 2',
    correct: false,
    choicePhoto: '',
  },
  {
    id: 3,
    name: 'Answer 3',
    correct: false,
    choicePhoto: '',
  },
];

function ViewQuestion() {
  const [actionType, setActionType] = useState('');

  return (
    <MDBox>
      <MDTypography fontSize='2rem' fontWeight='bold'>
        Question: 1
      </MDTypography>
      <MDBox display='flex'>
        <MDTypography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod saepe sint voluptatum ab
          qui repudiandae itaque praesentium sunt et est.
        </MDTypography>
        <img
          width='20%'
          src='https://odam.uz/upload/media/posts/2019-11/30/miyamizni-aldab-qo-yishi-mumkin-bo-lgan-8-ta-rasm-sinchkovroq-bo-ling_1575125501-b.jpg'
          alt=''
        />
      </MDBox>
      <MDBox>
        {choices.map(choice => (
          <MDBox
            key={choice.id}
            display='flex'
            alignItems='center'
            gap={3}
            mt={2}
            borderBottom={1}
            color={choice.correct && 'success'}
          >
            {choice.choicePhoto && <img width='10%' src={choice.choicePhoto} alt='' />}
            {actionType === 'edit' ? (
              <input type='text' value={choice.name} />
            ) : (
              <MDTypography color={choice.correct && 'success'}>{choice.name}</MDTypography>
            )}
          </MDBox>
        ))}
      </MDBox>
      {actionType === 'edit' ? (
        <MDBox display='flex' justifyContent='right' gap={3} mt={2}>
          <MDButton size='large' variant='gradient' color='info' onClick={() => setActionType('')}>
            Save
          </MDButton>
          <MDButton
            size='large'
            variant='contained'
            color='warning'
            onClick={() => setActionType('')}
          >
            Cancel
          </MDButton>
        </MDBox>
      ) : (
        <MDBox display='flex' justifyContent='right' gap={3} mt={2}>
          <MDButton
            size='large'
            variant='gradient'
            color='info'
            onClick={() => setActionType('edit')}
          >
            Edit
          </MDButton>
          <MDButton size='large' variant='contained' color='warning'>
            Delete
          </MDButton>
        </MDBox>
      )}
    </MDBox>
  );
}

// ViewQuestion.propTypes = {
//   question: PropTypes.object,
// };

export default ViewQuestion;
