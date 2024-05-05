import { useForm } from '../context/FormContext';
import Addon from '../ui/Addon';
import Header from '../ui/Header';
import Navigation from '../ui/Navigation';
import { YEARLYRATE } from '../helper/constant';

interface AddonsData {
  id: number;
  title: string;
  subtitle: string;
  addonRate: number;
}

const addons: AddonsData[] = [
  {
    id: 1,
    title: 'Online Service',
    subtitle: 'Access to multiplayer games',
    addonRate: 1,
  },
  {
    id: 2,
    title: 'Large Storage',
    subtitle: 'Extra 1TB of cloud save',
    addonRate: 2,
  },
  {
    id: 3,
    title: 'Customizable Profile',
    subtitle: 'Customize theme on your profile',
    addonRate: 3,
  },
];

const AddOns = () => {
  const { currentPlanDuration } = useForm();
  const { selectedAddons, setSelectedAddons } = useForm();

  return (
    <div className="container">
      <Header
        title={'Pick Add-ons'}
        subtitle={'Add-ons help enhance gaming experience'}
      />
      <div className="mt-12 flex flex-col gap-4">
        {addons.map((addon) => {
          const calculatedRate =
            currentPlanDuration === 'monthly'
              ? addon.addonRate
              : addon.addonRate * YEARLYRATE;

          return (
            <Addon
              title={addon.title}
              addonRate={calculatedRate}
              duration={currentPlanDuration === 'monthly' ? 'mo' : 'yr'}
              subtitle={addon.subtitle}
              addon={addon}
              setSelectedAddons={setSelectedAddons}
              selectedAddons={selectedAddons}
              key={addon.id}
            />
          );
        })}
      </div>

      <Navigation path={'/form/summary'} />
    </div>
  );
};

export default AddOns;
