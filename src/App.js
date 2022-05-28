import RoutesComponent from "./components/Routes/RoutesComponent.js";
import { useStepperContext } from "./StepContext.js";

function App() {
  const { step } = useStepperContext();
  return (
    <div className="w-full h-screen bg-slate-200 flex items-center justify-center p-5">
      <div className="relative bg-white container p-5 max-w-sm rounded-md flex flex-col items-center justify-center">
        <RoutesComponent />
        <div className="flex justify-end w-full mt-5">Step - {step} of 3</div>
      </div>
    </div>
  );
}

export default App;
