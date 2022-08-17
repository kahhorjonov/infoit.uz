import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import { useState } from 'react';

function CreateTestForm() {
  const [newTest, setNewTest] = useState({
    categoryId: null,
    durationTimeInMinutes: 0,
    finishTestDate: '',
    finishVisionTestDate: '',
    id: 0,
    name: '',
    price: 0,
    questionsCount: 0,
    questionsId: [],
    startTestDate: '',
    startVisionTestDate: '',
  });

  return (
    <MDBox>
      <MDTypography textAlign='center' textTransform='uppercase' fontWeight='bold' mb={1}>
        Create Test
      </MDTypography>
      <MDInput type='date' fullWidth />
    </MDBox>
  );
}

export default CreateTestForm;
