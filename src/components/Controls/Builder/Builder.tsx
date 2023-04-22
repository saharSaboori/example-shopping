import { FC } from "react";

interface IProps {
  title: string;
}

const Builder: FC<IProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center my-3 ">
      <div className="text-purple-950 mx-3">{title}</div>
      <button className="block p-1 mx-3 w-20 bg-purple-700 text-white border-none rounded outline-none">
        Add
      </button>
      <button className="block p-1 mx-3 w-20 bg-red-800 text-white border-none rounded outline-none">
        Remove
      </button>
    </div>
  );
};

export default Builder;
