import { BrowserRouter,Routes,Route } from "react-router-dom";
import SecretWrapper from "./components/SecretWrapper";
import Authenticate from "./pages/Authenticate";
import Profile from "./pages/Profile";

 

import "./style/scss/main.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authenticate type="login" />}></Route>
        <Route path="/signin" element={<Authenticate type="signin" />}></Route>    
        <Route path="/profile/:id" element={<SecretWrapper />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
