import "./App.css"
import { Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Home from "./pages/Home";
import NoMatch from './pages/NoMatch';
import DrinkDetail from "./pages/DrinkDetail";
import Layout from "./components/Navbar/Layout"

function App() {
  return (
  <>  
      <div className="App">
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/drinkDetail' element={<DrinkDetail />} />
      </Routes>
      </div>
  </>
  );
}

export default App;
