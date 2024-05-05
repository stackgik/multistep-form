import { useForm } from '../context/FormContext';

const TotalBill = () => {
  const { selectedAddons, currentPlanDuration, planDetails } = useForm();

  if (selectedAddons.length === 0) return;

  const totalAddons = selectedAddons.reduce(
    (totalBill, currentAddon) => totalBill + currentAddon.addonRate,
    0
  );

  const totalBill = totalAddons + planDetails.price;
  const time = currentPlanDuration === 'monthly' ? 'month' : 'year';
  const duration = currentPlanDuration === 'monthly' ? 'mo' : 'yr';

  return (
    <div className="flex justify-between items-center mt-8 px-6">
      <span className="text-[14px] text-gray-400">{`Total (per ${time})`}</span>
      <span className="text-md font-semibold text-blue-900">{`+${totalBill}/${duration}`}</span>
    </div>
  );
};

export default TotalBill;
