import { MdIosShare } from "react-icons/md";
const Pst = () => {

  return (
    <div className="w-[100%] flex justify-between items-center bg-white p-6 rounded-lg shadow-md  mx-auto">
      <div className="flex items-center space-x-4 p-4  rounded-lg w-max">
        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img
            className="aspect-square h-full w-full"
            alt="Profile picture"
            src=""
          />
        </span>
        <div>
          <div className="font-semibold text-lg">Nathnael Wondisha</div>
          <div className="text-gray-500 text-sm">Driver . 400 Groove St.</div>
        </div>

      </div>
      <div>
        <MdIosShare size={25} />
      </div>
    </div>);
}

export default Pst;