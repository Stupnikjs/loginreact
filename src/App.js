import { BrowserRouter,Routes,Route } from "react-router-dom";


import Login from "./login/Login";
import Profile from "./profile/Profile";
import GamePlatform from "./game/GameBoard";
import GamePage from "./game/GamePage";

// <Route path="/profile/:id" element={<SecretWrapper />}></Route>
 

import "./style/scss/main.scss"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login type="login" />}></Route>
        <Route path="/signin" element={<Login type="signin" />}></Route>    
        <Route path="/profile/:id" element={<Profile></Profile>}/>
        <Route path="/profile/game/:id" element={<GamePage/>}/>
        <Route path="/profile/:id/morpion" element={<GamePlatform game="tictactoe"></GamePlatform>}/>
        <Route path="/profile/:id/echec" element={<GamePlatform game="chess"></GamePlatform>}/>
        <Route path="/profile/:id/roulette" element={<GamePlatform game="roulette"></GamePlatform>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
