import { BrowserRouter,Routes,Route } from "react-router-dom";
import Authenticate from "./pages/Authenticate";
import "./style/scss/main.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authenticate type="login" />}></Route>
        <Route path="/signin" element={<Authenticate type="signin" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
