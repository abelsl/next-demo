import { Button } from '@/components/ui/button';
import { Navbar } from '../../components/component/navbar';
import Question from './_component/question';
const Page = () => {

  return (<>
    <Navbar />
    <div className='w-full max-h-fit min-h-screen mt-16 flex flex-col justify-start items-center'>
      <div className='w-3/5'>
        <div className='flex flex-col gap-4  justify-center items-center p-5 mb-5'>
          <h1 className='text-3xl font-bold mb-2'>Frequently Asked Questions</h1>
          <p className='text-sm text-semibold mb-2'>You have questions . we have answers.</p>
          <Button >Ask more</Button>
        </div>
        <div className='flex flex-col gap-5 mb-5'>
          <div className='bg-opacity-10 bg-yellow-500 max-h-fit p-3  rounded-md  '>
            <p className='mb-3 font-semibold'>how much drivers earn per trip?</p>
            <div className='h-20'></div>
          </div>
          <Question
            question={"What do i need to register ?"}
            answer={" "}
          />
          <Question
            question={"Payout ?"}
            answer={" "} />
        </div>
      </div>
    </div>

  </>);
}

export default Page;

