import { BrowserRouter,Routes,Route } from "react-router-dom";
import SecretWrapper from "./components/SecretWrapper";
import Login from "./login/Login";
import Profile from "./pages/Profile";
import GamePlatform from "./pages/GamePlatform";
import Tictactoe from "./tictactoe/Tictactoe";

// <Route path="/profile/:id" element={<SecretWrapper />}></Route>
 

import "./style/scss/main.scss"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login type="login" />}></Route>
        <Route path="/signin" element={<Login type="signin" />}></Route>    
        <Route path="/profile" element={<Profile></Profile>}/>
        <Route path="/morpion" element={<GamePlatform game="tictactoe"></GamePlatform>}/>
        <Route path="/echec" element={<GamePlatform game="chess"></GamePlatform>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
