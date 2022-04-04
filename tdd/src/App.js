import { useState } from "react";
import "./App.css";
import OrderPage from "./pages/orderPage/OrderPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import CompletePage from "./pages/CompletePage/CompletePage";
import MissionPage from "./pages/missionPage/MissionPage";
import { OrderContextProvider } from "./context/OrderContext";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div style={{ padding: "4rem" }}>
      <OrderContextProvider>
        {step === 0 && <OrderPage setStep={setStep}/>}
        {step === 1 && <SummaryPage setStep={setStep}/>}
        {step === 2 && <CompletePage setStep={setStep}/>}
        {step === 3 && <MissionPage setStep={setStep}/>}
      </OrderContextProvider>
        
    </div>
  )
  /*return (
    <div style={{ padding: "4rem" }}>
      <OrderContextProvider>
        {step === 0 && <OrderPage setStep={setStep} />}
        {step === 1 && <SummaryPage setStep={setStep} />}
        {step === 2 && <CompletePage setStep={setStep} />}
      </OrderContextProvider>
    </div>
  );*/
}

export default App;
