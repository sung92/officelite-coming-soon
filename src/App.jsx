import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SelectFormProvider } from "./contexts/SelectFormContext";
import { CountdownProvider } from "./contexts/CountdownContext";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";

function App() {
  return (
    <CountdownProvider>
      <SelectFormProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </SelectFormProvider>
    </CountdownProvider>
  );
}
export default App;
