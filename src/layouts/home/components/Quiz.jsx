import QuizPagination from 'components/QuizPagination/QuizPagination';
import CardQuiz from '../Cards/CardQuiz/CardQuiz';

export default function Quiz() {
  return (
    <div className='relative mt-32'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-4xl font-bold'>Fizika fanidan test topshiriqlari</h1>
          <p>Savollar soni: 30 ta</p>
          <p>Davomiyligi: 1 soat 45 minut</p>
        </div>
      </div>

      <hr className='mt-6 hr-3' />

      <div className='container mx-auto mt-20 mb-24'>
        <div className='flex gap-5'>
          <QuizPagination />
          <CardQuiz />
        </div>
      </div>
    </div>
  );
}
