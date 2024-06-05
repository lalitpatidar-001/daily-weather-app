import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import {Route,Routes} from "react-router-dom"
import HomeLayout from './layout/HomeLayout';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index exact element={<HomePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
