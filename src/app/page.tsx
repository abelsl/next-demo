import { Navbar } from "@/components/component/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex lg:flex-row flex-col h-screen w-full justify-center items-center mt-16  ">
        <div className=" bg-[#e0ecf8] p-4 h-fit">
          {/* <img src="/placeholder.svg" alt="Map" className="h-full w-full object-cover" width="500" height="500" style="aspect-ratio: 500 / 500; object-fit: cover;"> */}
        </div>
        <div className="w-[350px] h-full lg:w-1/2 bg-white p-6 flex flex-col lg:justify-between items-center ">
          <div className="">
            <h2 className="text-2xl text-center font-bold">Your order has been confirmed</h2>
            <p className="mt-2 text-sm text-center text-green-500">You&apos;ll be contacted by a driver very soon.</p>
            <div className="mt-6">
              <h3 className="text-lg text-center font-semibold">Estimated time of delivery</h3>
              {/*TODO: will do the logic part late for extimated time */}
              <p className="text-4xl text-center font-bold text-yellow-500">1:30 hr</p>
            </div>
          </div>

          <button className="align-bottom inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-6 w-full bg-black text-white">
            Cancel Order</button>
        </div>
      </div>
    </>
  );
}
