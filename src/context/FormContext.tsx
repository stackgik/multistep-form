import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
  // useEffect,
} from "react";
import { YEARLYRATE } from "../helper/constant";

interface SelectedAddonsProp {
  id: number;
  addonRate: number;
  baseRate: number;
  title: string;
}

interface PlanDetailsProp {
  plan: string;
  price: number;
  baseRate: number;
}

interface FormContextProp {
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
  selectedAddons: SelectedAddonsProp[];
  setSelectedAddons: Dispatch<SetStateAction<SelectedAddonsProp[]>>;
  currentPlanDuration: string;
  planDetails: PlanDetailsProp;
  setPlanDetails: Dispatch<SetStateAction<PlanDetailsProp>>;
}

// Provide a default value matching the type
const defaultContextValue: FormContextProp = {
  isToggled: false,
  setIsToggled: () => {},
  currentPlanDuration: "monthly",
  selectedAddons: [],
  setSelectedAddons: () => {},
  planDetails: { plan: "Arcade", price: 9, baseRate: 9 },
  setPlanDetails: () => {},
};

const FormContext = createContext<FormContextProp>(defaultContextValue);

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [isToggled, setIsToggled] = useState<boolean>(() => {
    const storedValue = sessionStorage.getItem("isToggled");
    return storedValue
      ? JSON.parse(storedValue)
      : defaultContextValue.isToggled;
  });
  const currentPlanDuration = isToggled ? "yearly" : "monthly";
  const [planDetails, setPlanDetails] = useState(() => {
    const storedValue = sessionStorage.getItem("planDetails");
    return storedValue
      ? JSON.parse(storedValue)
      : defaultContextValue.planDetails;
  });
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddonsProp[]>(
    () => {
      const storedValue = sessionStorage.getItem("selectedAddons");
      return storedValue
        ? JSON.parse(storedValue)
        : defaultContextValue.selectedAddons;
    }
  );

  useEffect(() => {
    sessionStorage.setItem("isToggled", JSON.stringify(isToggled));
  }, [isToggled]);

  useEffect(() => {
    sessionStorage.setItem("planDetails", JSON.stringify(planDetails));
  }, [planDetails]);

  useEffect(() => {
    sessionStorage.setItem("selectedAddons", JSON.stringify(selectedAddons));
  }, [selectedAddons]);

  useEffect(() => {
    setPlanDetails((prevDetails: PlanDetailsProp) => ({
      ...planDetails,
      price:
        prevDetails.baseRate *
        (currentPlanDuration === "yearly" ? YEARLYRATE : 1),
    }));
  }, [currentPlanDuration, planDetails]);

  useEffect(() => {
    if (selectedAddons.length === 0) return;
    setSelectedAddons((prevSelectedAddons) =>
      prevSelectedAddons.map((addon) => ({
        ...addon,
        addonRate:
          addon.baseRate * (currentPlanDuration === "yearly" ? YEARLYRATE : 1),
      }))
    );
  }, [currentPlanDuration]);

  return (
    <FormContext.Provider
      value={{
        isToggled,
        setIsToggled,
        currentPlanDuration,
        planDetails,
        setPlanDetails,
        setSelectedAddons,
        selectedAddons,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined)
    throw new Error("FormContext was used outside the FormProvider");

  return context;
};

export { useForm, FormProvider };
