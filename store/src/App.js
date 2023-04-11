import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import SignUp from "./components/Login/SignUp";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Login/>} path={'login'}/>
            <Route element={<SignUp/>} path={'signup'}/>
            <Route element={<Main/>} path={'main'}/>
        </Routes>
    </div>
  );
}

export default App;
