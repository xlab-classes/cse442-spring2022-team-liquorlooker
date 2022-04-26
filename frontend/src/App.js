import "./App.css";
import { Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Home from "./pages/Home";
// import NoMatch from './pages/NoMatch';
import DrinkDetail from "./pages/DrinkDetail";
import Layout from "./components/Navbar/Layout";
import RegisterUser from "./pages/RegisterUser";
import RegisterBusiness from "./pages/RegisterBusiness";
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

        <Route path='/registerUser' element={<Layout />}>
          <Route index element={<RegisterUser />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        <Route path='/registerBusiness' element={<Layout />}>
          <Route index element={<RegisterBusiness />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        <Route path='/businessInventory/:storeName' element={<Layout />}>
          <Route index element={<BusinessInventory />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>

        <Route path='/editDrinkInfo/:storeName' element={<Layout />}>
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
