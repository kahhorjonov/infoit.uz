import img from 'assets/images/bg-profile.jpeg';
import teacher from 'assets/homePage/teacher.png';
import Styles from './CardQuiz.module.scss';

function CardQuiz() {
  return (
    <div className={Styles.cardQuiz}>
      <p>Savol 1</p>
      <div className={Styles.question}>
        <div>
          <p>Savolni o‘qib, variantlardan birini tanlang</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.
          </span>
        </div>
        <div className={Styles.imageCont}>
          <img
            src={img}
            // src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eiffel_Tower_Vertical.JPG/401px-Eiffel_Tower_Vertical.JPG?20080622213711'
            alt=''
          />
        </div>
      </div>

      <div className={Styles.choiceContainer}>
        <div className={Styles.choice}>
          <span className={Styles.choiceVariant}>A</span>
          <span className={Styles.choiceText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardQuiz;
