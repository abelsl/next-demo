import { LiaEditSolid } from "react-icons/lia";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../ui/dialog";

const Psn = () => {

  return (<div className="bg-white h-fit p-6 rounded-lg shadow-md  max-w-md mx-auto space-y-4 ">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-xl font-semibold mr-10">Legal Information</h2>
      <Dialog >
        <DialogTrigger>
          <button className="inline-flex text-yellow-500  items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm">
            <LiaEditSolid size={20} />
            <span className="ml-1">
              Edit
            </span>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div>Edit Personal Information</div>
          </DialogHeader>

        </DialogContent>
      </Dialog>
    </div>
    <div className="flex items-center">
      {/* icon */}
      <div>
        <p className="font-semibold">1234567890</p>
        <p className="text-sm text-gray-500">Liscence number</p>
      </div>
    </div>
    <div className="flex items-center">
      {/* icon */}
      <div>
        <p className="font-semibold">1234567890</p>
        <p className="text-sm text-gray-500">Id number</p>
      </div>
    </div>
    <div className="flex items-center mb-10">

      <div>
        <p className="font-semibold">1234567890</p>
        <p className="text-sm text-gray-500">Vehicle registration number</p>
      </div>
    </div>
    <button className=" align-bottom inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-6 w-full bg-yellow-500 text-white"
    >Download documents </button>
  </div>);
}

export default Psn;