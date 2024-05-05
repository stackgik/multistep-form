import { NavLink } from 'react-router-dom';

interface StepProp {
  to: string;
  num: number;
  label: string;
}

const Step = ({ to, num, label }: StepProp) => {
  return (
    <div className="flex gap-6 items-center ">
      <NavLink
        to={to}
        className="h-10 aspect-square rounded-full border border-white flex items-center justify-center text-white font-semibold text-md step"
      >
        {num}
      </NavLink>
      <div className="flex flex-col gap-[1px]">
        <span className="uppercase text-[12px] text-gray-300">{`step ${num}`}</span>
        <span className="uppercase text-md font-semibold text-white">
          {label}
        </span>
      </div>
    </div>
  );
};

export default Step;
