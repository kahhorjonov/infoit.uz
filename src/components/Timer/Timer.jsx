import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { toast } from 'react-toastify';
import { getResultTestSuccess } from 'store/actions/actionCreaters';
import { finishUserTest } from 'store/thunk';
import result from '../../layouts/home/components/result.json';

import Styles from './Timer.module.scss';

function Timer({ duration }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(duration);
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: async () => {
      const response = await finishUserTest(params?.id);
      if (response.success === 200) {
        toast.warning('Time out!');
        dispatch(getResultTestSuccess(result.objectKoinot));
        dispatch(getResultTestSuccess(response.objectKoinot));
        localStorage.removeItem('userAnswers');
        navigate(`/result/${params?.id}`);
      }
    },
  });

  return (
    <div className={Styles.timerContainer}>
      {hours ? <h1>{hours < 10 ? `0${hours}` : hours} : </h1> : ''}
      <h1>{minutes < 10 ? `0${minutes}` : minutes}:</h1>
      <h1> {seconds < 10 ? `0${seconds}` : seconds}</h1>
    </div>
  );
}

Timer.propTypes = {
  duration: PropTypes.number,
};

export default Timer;
