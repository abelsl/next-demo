
import { LiaEditSolid } from "react-icons/lia";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import Vmodal from "./modals/vModal";

const Vc = () => {

  return (<div className="w-[100%] bg-white p-6 rounded-lg shadow-md  mx-auto ">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-xl font-semibold mr-10">Vehicle Information</h2>
      <Dialog>
        <DialogTrigger asChild>
          <button className="inline-flex text-yellow-500  items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm">
            <LiaEditSolid size={20} />
            <span className="ml-1">
              Edit
            </span>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle >
              <div className="text-bold text-center text-2xl">
                Edit Vehicle Information
              </div>
            </DialogTitle>
          </DialogHeader>

          <Vmodal />
          <DialogFooter>
            <div>
              <Button />
              <Button />
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    <div className="flex flex-row justify-between items-start ">

      <div className="inline-flex flex-col space-y-4" >
        <div className="flex items-center">
          {/* icon */}
          <div>
            <p className="font-semibold">Toyota</p>
            <p className="text-sm text-gray-500">Brand</p>
          </div>
        </div>
        <div className="flex items-center">
          {/* icon */}
          <div>
            <p className="font-semibold">Pruis</p>
            <p className="text-sm text-gray-500">model</p>
          </div>
        </div>
        <div className="flex items-center">
          {/* icon */}
          <div>
            <p className="font-semibold">2024</p>
            <p className="text-sm text-gray-500">make year</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        {/* icon */}
        <div>
          <p className="font-semibold">1234567890</p>
          <p className="text-sm text-gray-500">Liscence plate number</p>
        </div>
      </div>
    </div>
  </div>);
}

export default Vc;