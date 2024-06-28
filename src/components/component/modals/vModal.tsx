import Select from "react-select";
import Input from "../Input";
import { Button } from "@/components/ui/button";

const options = [
  { value: 'Toyota', label: 'Toyota' },
  { value: 'Volkswagen', label: 'Volkswagen' },
  { value: 'Ford', label: 'Ford' },
  { value: 'Honda', label: 'Honda' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Audi', label: 'Audi' },
  { value: 'Jeep', label: 'Jeep' },
  { value: 'Suzuki', label: 'Suzuki' },
  { value: 'Renault', label: 'Renault' },
  { value: 'Mazda', label: 'Mazda' },
  { value: 'Dodge', label: 'Dodge' },
  { value: 'Lexus', label: 'Lexus' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Land Rover', label: 'Land Rover' },
];

const carCategories = [
  { label: 'Compact Car (e.g., Honda Civic)', value: 'Compact' },
  { label: 'Midsize Car (e.g., Toyota Camry)', value: 'Midsize' },
  { label: 'SUV (e.g., Ford Explorer)', value: 'SUV' },
  { label: 'Minivan (e.g., Dodge Grand Caravan)', value: 'Minivan' },
  { label: 'Pickup Truck (e.g., Ford F-150)', value: 'Pickup Truck' },
  { label: 'Van (e.g., Mercedes-Benz Sprinter)', value: 'Van' },
];

const Vmodal = () => {

  return (<div>




    <div className="flex flex-col gap-1 mb-4 ">
      <label className="block text-gray-700 text-sm font-bold ">
        Vehicle Brand
      </label>
      <Select
        options={options}
        isSearchable={false}
      // defaultValue={
      //   options.find(x => x.value === vehicle?.brand) ?? options[0]
      // }
      // onChange={(e: any) => {
      //   setBrand(e?.value);
      // }}
      />
    </div>
    <div className="flex flex-col gap-1 mb-4 ">
      <label className="block text-gray-700 text-sm font-bold ">
        Vehicle Category
      </label>
      <Select
        options={carCategories}
        isSearchable={false}
      // defaultValue={
      //   carCategories.find(x => x.value === vehicle?.category) ??
      //   carCategories[0]
      // }
      // onChange={(e: any) => {
      //   setCategory(e?.value);
      // }}
      />
    </div>

    <Input
      type="text"
      id="vehicleModel"
      label="Vehicle Model"
      // value={model}
      // onChange={e => setModel(e.target.value)}
      className="block w-full border-gray-300 mb-4  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 "
    />
    <div className="flex flex-col gap-1 mb-4 ">
      <label className="block text-gray-700 text-sm font-bold ">
        Make (year)
      </label>
      <Select

        options={new Array(5)
          .fill(0)
          .map((_, i) => ({ value: i + 2020, label: `${i + 2020}` }))}
        // menuPosition="fixed"
        isSearchable={false}
      // defaultValue={{ value: make, label: make.toString() }}
      // onChange={(e: any) => {
      //   setMake(e?.value ?? 2020);
      // }}
      />
    </div>
    <div>

      <Button >SAve </Button>
    </div>

  </div>);
}

export default Vmodal;