import { useForm } from '../context/FormContext';

interface PlanProp {
  src: string;
  alt: string;
  label: string;
  price: number;
  duration: string;
  onClick?: () => void;
}

const Plan = ({ src, alt, label, price, duration, onClick }: PlanProp) => {
  const { currentPlanDuration, planDetails } = useForm();

  return (
    <button
      className={`rounded-md border p-6 ${
        planDetails.plan === label ? 'border-blue-900 bg-blue-50' : ''
      } hover:border-blue-900`}
      onClick={onClick}
    >
      <figure>
        <img src={src} alt={alt} />
      </figure>

      <div className="mt-8 flex flex-col gap-[2px]">
        <span className="text-blue-900 font-semibold text-lg">{label}</span>
        <span className="text-sm text-gray-400">{`$${price}/${duration}`}</span>
        {currentPlanDuration === 'yearly' && (
          <span className="text-blue-900 text-[12px]">2 months free</span>
        )}
      </div>
    </button>
  );
};

export default Plan;
