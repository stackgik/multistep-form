import { Dispatch, SetStateAction } from 'react';

interface ISelectedAddonsProp{
  id: number;
  addonRate: number;
  title: string;
  baseRate: number;
}

interface AddonProp {
  title: string;
  addonRate: number;
  duration: string;
  subtitle: string;
  setSelectedAddons: Dispatch<SetStateAction<ISelectedAddonsProp[]>>;
  selectedAddons: ISelectedAddonsProp[];
  addon: {id:number, title:string, subtitle:string, addonRate:number};
}

const Addon = ({
  addonRate,
  addon: { id, title },
  duration,
  subtitle,
  selectedAddons,
  setSelectedAddons,
}: AddonProp) => {
  function handleCheck() {
    setSelectedAddons((items) => {
      const exists = items.some((item) => item.id === id);

      return exists
        ? items.filter((item) => item.id !== id)
        : [
            ...items,
            {
              id,
              addonRate,
              title,
              baseRate: addonRate
            },
          ];
    });
  }

  const isSelected = selectedAddons.some((item) => item.id === id);

  return (
    <article className={`grid grid-cols-[auto_1fr_auto] gap-8 rounded-md border border-gray-300 px-6 py-4 cursor-pointer ${isSelected ? 'bg-blue-50' : ''} hover:border-blue-900 transition-all duration-300`}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheck}
        className="h-[20px] aspect-square self-center cursor-pointer"
      />
      <div className="flex flex-col gap-[2px]">
        <span className="text-blue-900 font-semibold text-[16px]">{title}</span>
        <span className="text-gray-400 text-[14px] font-medium">
          {subtitle}
        </span>
      </div>
      <span className="text-blue-900 text-sm self-center">{`+$${addonRate}/${duration}`}</span>
    </article>
  );
};

export default Addon;
