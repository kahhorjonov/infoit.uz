import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { toast } from 'react-toastify';

import Styles from './Timer.module.scss';

function Timer({ expiryTimestamp }) {
  const navigate = useNavigate();
  const params = useParams();
  const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      toast.warning('Time out!');
      navigate(`/result/${params?.id}`);
    },
    // console.warn('onExpire called'),
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
  expiryTimestamp: PropTypes.object,
};

export default Timer;
