import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import AddonDetails from './AddonDetails';

const PlanSummary = () => {
  const { selectedAddons, currentPlanDuration, planDetails } = useForm();
  const durationAbbr = currentPlanDuration === 'monthly' ? 'mo' : 'yr';
  const navigate = useNavigate();

  return (
    <div className="p-6 flex flex-col gap-4 rounded-md bg-blue-50 mt-12">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{`${planDetails.plan}(${currentPlanDuration})`}</h3>
          <button
            onClick={() => navigate('/form/plans')}
            className="underline text-blue-700 text-[13px]"
          >
            Change
          </button>
        </div>
        <span className="font-semibold">{`${planDetails.price}/${durationAbbr}`}</span>
      </div>
      {selectedAddons.length > 0 && <div className="h-[1px] bg-gray-200"></div>}

      <div className="flex flex-col gap-2">
        {selectedAddons.length > 0
          ? selectedAddons.map((item) => (
              <AddonDetails
                name={item.title}
                rate={`${item.addonRate}/${durationAbbr}`}
                key={item.title}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default PlanSummary;
