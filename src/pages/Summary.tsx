import Header from '../ui/Header';
import Navigation from '../ui/Navigation';
import PlanSummary from '../ui/PlanSummary';
import TotalBill from '../ui/TotalBill';

const Summary = () => {
  return (
    <div className="container">
      <Header
        title={'Finishing Up'}
        subtitle={'Double-check everything looks OK before comfirming'}
      />

      <PlanSummary />
      <TotalBill />
      <Navigation path={'/form/summary/appreciation'} />
    </div>
  );
};

export default Summary;
