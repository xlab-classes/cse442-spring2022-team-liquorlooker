import "./App.css";
import { Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Home from "./pages/Home";
// import NoMatch from './pages/NoMatch';
import DrinkDetail from "./pages/DrinkDetail";
import Layout from "./components/Navbar/Layout";
import Registration from "./pages/Registration";
import BusinessInventory from "./pages/BusinessInventory";
import EditDrinkInfo from "./pages/EditDrinkInfo";

function App() {
  return (
  <>  
      <div className="App">
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        <Route path='/login' element={<Layout />}>
          <Route index element={<Login />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        <Route path='/drinkDetail' element={<Layout />}>
          <Route index element={<DrinkDetail />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        <Route path='/registration' element={<Layout />}>
          <Route index element={<Registration />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        <Route path='/businessInventory' element={<Layout />}>
          <Route index element={<BusinessInventory />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        <Route path='/editDrinkInfo' element={<Layout />}>
          <Route index element={<EditDrinkInfo />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
        {/* <Route path="*" element={<NoMatch/>}/> */}
      </Routes>
      </div>
  </>
  );
}

export default App;
