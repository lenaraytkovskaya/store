import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Login/>} path={'login'}/>
        </Routes>
    </div>
  );
}

export default App;
