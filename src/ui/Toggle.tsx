import { useForm } from '../context/FormContext';

const Toggle = () => {
  const { isToggled, setIsToggled } = useForm();

  function handleIsToggled() {
    setIsToggled((plan) => !plan);
  }

  const activeStyle = 'text-blue-950 text-[15px] transition-all duration-300';
  const inactiveStyle = 'text-gray-400 text-[15px] transition-all duration-300';

  return (
    <div className="flex gap-8 items-center justify-center bg-blue-50 p-2 mt-8">
      <span className={!isToggled ? activeStyle : inactiveStyle}>Monthly</span>
      <label className="switch">
        <input type="checkbox" onChange={handleIsToggled} checked={isToggled} />
        <span className="slider"></span>
      </label>
      <span className={isToggled ? activeStyle : inactiveStyle}>Yearly</span>
    </div>
  );
};

export default Toggle;
