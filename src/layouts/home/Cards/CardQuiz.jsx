import img from 'assets/images/bg-profile.jpeg';
import teacher from 'assets/homePage/teacher.png';

function CardQuiz() {
  return (
    <div className='max-w-full background_container rounded-xl p-12'>
      <p className='font-bold'>Savol 1</p>
      <div className='container flex flex-wrap items-center'>
        <div className='md:w-8/12 sm:block'>
          <p className='my-2'>Savolni o‘qib, variantlardan birini tanlang</p>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.
          </p>
        </div>
        <div className='md:w-4/12 sm:block'>
          <img
            src={img}
            // src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eiffel_Tower_Vertical.JPG/401px-Eiffel_Tower_Vertical.JPG?20080622213711'
            alt=''
            className='max-h-250-px'
          />
        </div>
      </div>

      {/* <div>
        <div className=''>

        </div>
      </div> */}
    </div>
  );
}

export default CardQuiz;
