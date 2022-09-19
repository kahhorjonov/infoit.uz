import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

// icons
import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled';
import Spiner from 'components/Loader/Spiner';

import { useDispatch, useSelector } from 'react-redux';
import { getMe, buyTest } from 'store/thunk';
import { toast } from 'react-toastify';
import ModalComp from 'components/Modal/ModalComp';
import MDButton from 'components/MDButton';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import moment from 'moment/moment';

export default function CardTestInfo({ planningTests, workingComp, onChangeAction }) {
  const dispatch = useDispatch();
  const {
    profileData: { isLoading, profileData },
  } = useSelector(store => store);
  const [openModal, setOpenModal] = useState(false);

  const [profile, setProfile] = useState({ ...profileData });

  const params = useParams();
  const navigate = useNavigate();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleBuyTest = async () => {
    if (!profileData?.username) {
      navigate('/login');
      localStorage.setItem('buy', planningTests?.id);
    } else {
      const status = await buyTest(params?.id);
      status === 200 && navigate('/myTests');
      handleClose();
    }
  };

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    setProfile({ ...profileData });
  }, [profileData]);

  return (
    <div className='relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-2'>
      <ModalComp width='300px' status={openModal} onClose={handleClose}>
        <MDTypography textAlign='center'>Sotib olishni istaysizmi?</MDTypography>
        <MDBox display='flex' justifyContent='space-between' gap={2} marginTop={2}>
          <MDButton
            type='button'
            fullWidth
            variant='contained'
            color='success'
            onClick={() => handleBuyTest()}
          >
            Ha
          </MDButton>
          <MDButton
            type='button'
            fullWidth
            variant='contained'
            color='secondary'
            onClick={handleClose}
          >
            Yo`q
          </MDButton>
        </MDBox>
      </ModalComp>
      {planningTests?.id ? (
        <div className='flex-auto p-4'>
          <div className='flex flex-wrap'>
            <div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
              <span className='font-semibold text-lg text-blueGray-700'>{planningTests?.name}</span>
            </div>
          </div>
          {/* <span className='text-sm whitespace-nowrap'>Kategoriya</span> */}
          <p className='text-base whitespace-nowrap font-bold mt-2'>
            {planningTests?.category?.nameUz}
          </p>
          <p className='mt-4 text-base flex items-center text-lightBlue-600'>
            <AccessTimeFilled />
            <span className='text-sm ml-1'>Boshlanish vaqti</span>
          </p>
          <p>
            <span className='text-sm whitespace-nowrap mr-2'>
              {moment(new Date(planningTests?.startTestDate))
                .format()
                .substr(0, 16)
                .replace('T', ', ')}
            </span>
          </p>

          <p className='text-base flex items-center text-red-500'>
            <AccessTimeFilled />
            <span className='text-sm ml-1'>Tugash vaqti</span>
          </p>
          <p>
            <span className='text-sm whitespace-nowrap mr-2'>
              {moment(new Date(planningTests?.finishTestDate))
                .format()
                .substr(0, 16)
                .replace('T', ', ')}
            </span>
            {/* <span className='text-sm whitespace-nowrap font-bold'>{statEndTime}</span> */}
          </p>

          <p className='mt-4'>
            <span className='text-base whitespace-nowrap'>Narxi:</span>
            <span className='whitespace-nowrap font-bold ml-2'>{planningTests?.price} so`m</span>
          </p>
          {/* <p>
            <span className='whitespace-nowrap font-bold'>{planningTests?.price} so`m</span>
          </p> */}

          <p className='w-full text-blueGray-400 mt-4 flex justify-between items-center'>
            {workingComp === 'admin' ? (
              <button
                type='button'
                onClick={() => onChangeAction('edit')}
                className='w-full bg-lightBlue-600'
                style={{
                  outline: 'none',
                  padding: '0.4rem 0.6rem',
                  color: 'white',
                  borderRadius: '6px',
                }}
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => handleOpen()}
                type='button'
                className='w-full bg-lightBlue-600'
                style={{
                  outline: 'none',
                  padding: '0.4rem 0.6rem',
                  color: 'white',
                  borderRadius: '6px',
                }}
              >
                Sotib olish
              </button>
            )}
          </p>
        </div>
      ) : (
        <Spiner />
      )}
    </div>
  );
}

CardTestInfo.defaultProps = {
  workingComp: '',
  onChangeAction: () => {},
  // statTitle: 'Prezident maktablari uchun',
  // statDescripiron: 'Fan nomi',
  // statSubjectTitle: 'Fizika',
  // statStartDate: '20.08.2022',
  // statEndDate: '21.08.2022',
  // statStartTime: '20:35',
  // statEndTime: '20:35',
};

CardTestInfo.propTypes = {
  workingComp: PropTypes.string,
  planningTests: PropTypes.object,
  onChangeAction: PropTypes.func,
  // statTitle: PropTypes.string,
  // statDescripiron: PropTypes.string,
  // statSubjectTitle: PropTypes.string,
  // statStartDate: PropTypes.string,
  // statEndDate: PropTypes.string,
  // statStartTime: PropTypes.string,
  // statEndTime: PropTypes.string,
};
