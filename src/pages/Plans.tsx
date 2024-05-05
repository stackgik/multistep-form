import Header from '../ui/Header';
import Plan from '../ui/Plan';
import Toggle from '../ui/Toggle';
import Navigation from '../ui/Navigation';
import { YEARLYRATE } from '../helper/constant';
import { useForm } from '../context/FormContext';

interface IPlan{
  id: number;
  img: string;
  label: string;
  rate: number;
}


const plans = [
  {
    id: 1,
    img: '/assets/icon-arcade.svg',
    label: 'Arcade',
    rate: 9,
  },
  {
    id: 2,
    img: '/assets/icon-advanced.svg',
    label: 'Advanced',
    rate: 12,
  },
  {
    id: 3,
    img: '/assets/icon-pro.svg',
    label: 'Pro',
    rate: 15,
  },
];

const Plans = () => {
  const { currentPlanDuration, setPlanDetails } = useForm();

  function handleClick(plan: IPlan) {
    setPlanDetails({
      plan: plan.label,
      price:
        currentPlanDuration === 'yearly' ? plan.rate * YEARLYRATE : plan.rate,
      baseRate: plan.rate,
    });
  }

  return (
    <div className="container">
      <Header
        title={'Select your plan'}
        subtitle={'You have option of monthly or yearly billing'}
      />

      <div className="grid grid-cols-[1fr_1fr_1fr] mt-12 gap-2">
        {plans.map((plan) => (
          <Plan
            key={plan.id}
            src={plan.img}
            label={plan.label}
            alt={plan.label}
            price={
              currentPlanDuration === 'monthly'
                ? plan.rate
                : plan.rate * YEARLYRATE
            }
            duration={currentPlanDuration === 'monthly' ? 'mo' : 'yr'}
            onClick={() => handleClick(plan)}
          />
        ))}
      </div>
      <div>
        <Toggle />
      </div>

      <Navigation path={'/form/addons'} />
    </div>
  );
};

export default Plans;
