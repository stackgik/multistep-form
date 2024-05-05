import Step from './Step';

const Sidebar = () => {
  return (
    <aside className="w-full rounded-lg sidebar px-8 py-12 flex flex-col gap-8">
      <Step to={'/form/personal-info'} label={'personal info'} num={1} />
      <Step to={'/form/plans'} label={'select plan'} num={2} />
      <Step to={'/form/addons'} label={'add-ons'} num={3} />
      <Step to={'/form/summary'} label={'summary'} num={4} />
    </aside>
  );
};

export default Sidebar;
