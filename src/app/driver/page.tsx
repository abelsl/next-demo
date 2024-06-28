import { Button } from "@/components/ui/button";
const Page = () => {

  return (
    <div className="w-full min-h-screen reltive">
      {/* <Image src="" width={} height={} alt="" className="w-full h-full object-cover" /> */}
      <div className="w-full  min-h-screen flex flex-col absolute z-10 gap-14">
        <div className="flex justify-between p-10 mb-10">
          <div className="h-5 w-fit font-bold text-2xl ">
            Debool
          </div>
          <Button>Login</Button>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 w-1/2 p-5 ml-10">
          <h1 className="text-xl font-bold">Join us as a driver and earn extra income on your own schedule.</h1>
          <p className="text-md font-semibold">make money whenever it suits you. With flexible hours and the freedom
            to choose your routes, you&lsquo;ll have the autonomy to drive your
            earnings to new heights. Sign up today and start your journey towards
            financial independence</p>

          <div className="flex lg:flex-row flex-col gap-8 mt-5">
            <Button>Join Now</Button>
            <button className="text-yellow-600 underline hover:cursor-pointer">Learn More</button>
          </div>
        </div>
      </div>

    </div>);
}

export default Page;