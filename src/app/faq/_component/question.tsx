type props = {
  question: string;
  answer: string;
}
const Question = ({ question, answer }: props) => {

  return (
    <div className='max-h-fit p-3 rounded-md border-black border-y-2'>
      <p className='mb-3 font-semibold'>{question}</p>
      {/* TODO: demo height on the answer will modify it later */}
      <div className='h-20'>{answer}</div>
    </div>);
}

export default Question;