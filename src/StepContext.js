import { createContext, useContext, useState } from "react";

const StepperContext = createContext({});

export function UseContextProvider({ children }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState([]);

  return (
    <StepperContext.Provider value={{ step, setStep, data, setData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { step, setStep } = useContext(StepperContext);

  return { step, setStep };
}

export function useDataContext() {
  const { data, setData } = useContext(StepperContext);

  return { data, setData };
}
