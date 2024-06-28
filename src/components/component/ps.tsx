
import { IoLocationOutline } from "react-icons/io5";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineAlternateEmail, MdOutlineLocalPhone } from "react-icons/md";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog";
const Ps = () => {

  return (<div className="w-[100%] bg-white p-6 rounded-lg shadow-md ">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-xl font-semibold mr-10">Personal Information</h2>
      <Dialog >
        <DialogTrigger>
          <div className="inline-flex text-yellow-500  items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm">
            <LiaEditSolid size={20} />
            <span className="ml-1">
              Edit
            </span>
          </div>
        </DialogTrigger>
        <DialogContent >
          <DialogHeader>
            Edit Personal Info.
          </DialogHeader>

        </DialogContent>

      </Dialog>
    </div>
    <div className="flex flex-row justify-between items-start ">

      <div className="inline-flex flex-col space-y-4" >
        <div className="flex items-center">
          <div className="inline-flex mr-4">
            <MdOutlineAlternateEmail size={20} />
          </div>
          <div>
            <p className="font-semibold">Abelrocks@gmail.com</p>
            <p className="text-sm text-gray-500">E-Mail address</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="inline-flex mr-4">
            <IoLocationOutline size={20} />
          </div>
          <div>
            <p className="font-semibold">400 groove st. us.</p>
            <p className="text-sm text-gray-500">Address</p>
          </div>
        </div>

      </div>
      <div className="flex gap-4 items-center">
        {/* icon */}
        <div>
          <MdOutlineLocalPhone size={20} />
        </div>
        <div>
          <p className="font-semibold">+25199604118</p>
          <p className="text-sm text-gray-500">Phone number</p>
        </div>
      </div>
    </div>
  </div>);
}

export default Ps;