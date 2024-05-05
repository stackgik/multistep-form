interface AddonDetailsProp {
  name: string;
  rate: string;
}

function AddonDetails({ name, rate }: AddonDetailsProp) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[14px] text-gray-400">{name}</span>
      <span className="text-[14px] text-gray-500">{`+$${rate}`}</span>
    </div>
  );
}

export default AddonDetails;
