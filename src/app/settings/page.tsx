"use client"
import { Navbar } from "@/components/component/navbar";
import Pi from "@/components/component/pi";
import Ps from "@/components/component/ps";
import Psn from "@/components/component/psn";
import Pst from "@/components/component/pst";
import Vc from "@/components/component/vc";

const page = () => {

  return (<>
    <Navbar />
    <div className="w-full max-h-fit min-h-screen mt-16 flex justify-center items-center">
      <div className="flex  min-h-screen  gap-10 mt-7 p-5">

        <div className="w-[500px] flex flex-col justify-start items-start gap-10  ">
          <Pst />
          <Ps />
          <Vc />
        </div>
        <div className="flex flex-col gap-10">

          <Psn />
          <Pi />
        </div>

      </div>
    </div>
  </>);
}

export default page;