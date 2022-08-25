import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';

import Styles from './Timer.module.scss';

function Timer({ expiryTimestamp }) {
  const navigate = useNavigate();
  const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => navigate('/myTests'),
    // console.warn('onExpire called'),
  });

  localStorage.setItem('timeMinutes', minutes);

  return (
    <div className={Styles.timerContainer}>
      <div>
        <h1>{hours}</h1>
        <span>hour</span>
      </div>
      <div>
        <h1>{minutes}</h1>
        <span>minut</span>
      </div>
      <div>
        <h1>{seconds}</h1>
        <span>second</span>
      </div>
    </div>
  );
}

Timer.propTypes = {
  expiryTimestamp: PropTypes.object,
};

export default Timer;
