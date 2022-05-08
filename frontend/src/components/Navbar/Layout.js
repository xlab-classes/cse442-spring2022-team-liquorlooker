import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
import { TextField } from "@mui/material";

function logout(){
  localStorage.removeItem("logged-in")
  localStorage.removeItem("user-email")
  localStorage.removeItem("store-name")
  alert("Logged-out")
  window.location.reload()
}

const Layout = () => {
  const [searchStore, setSearchStore] = React.useState("")
  if(localStorage.getItem("logged-in") && localStorage.getItem("store-name") != null){
      return (
        <div className="container">
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */} 
            
            <nav className="navbar">
              <Link to="/" className="logo">LiquorLooker</Link>
              <ul className="nav-links">
              { <div className="navbar-search">
                <TextField
                  id="navbar-search-tf"
                  label="Search"
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    style: { color: "azure" },
                  }}
                  value={searchStore}
                  onChange={(event) => setSearchStore(event.target.value)}
                  InputProps={{
                    style: { color: "azure"},
                    endAdornment: <Link to={`/businessInventory/${searchStore}`}>
                      <button>Search</button>
                    </Link>
                  }}
                  type="search"
                />
              </div> }
                <li className="nav-item">
                  <Link to={`/businessInventory/${localStorage.getItem("store-name")}`} className="link">{localStorage.getItem("store-name")}</Link>
                </li>
                <div className="nav-item">
                  <li className="link" onClick={() => logout()}>
                    Logout
                  </li>
                </div>
              </ul>
            </nav>
    
          {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
          <Outlet />
        </div>
        
      );
    }
    else if(localStorage.getItem("logged-in") && localStorage.getItem("store-name") === null){
      return (
        <div className="container">
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */} 
            
            <nav className="navbar">
              <Link to="/" className="logo">LiquorLooker</Link>
              <ul className="nav-links">
              { <div className="navbar-search">
                <TextField
                  id="navbar-search-tf"
                  label="Search"
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    style: { color: "azure" },
                  }}
                  value={searchStore}
                  onChange={(event) => setSearchStore(event.target.value)}
                  InputProps={{
                    style: { color: "azure"},
                    endAdornment: <Link to={`/businessInventory/${searchStore}`}>
                      <button>Search</button>
                    </Link>
                  }}
                  type="search"
                />
              </div> }
                <div className="nav-item">
                  <li className="link" onClick={() => logout()}>
                    Logout
                  </li>
                </div>
              </ul>
            </nav>
    
          {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
          <Outlet />
        </div>
      );
    }
    else{
      return (
        <div className="container">
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */} 
            
            <nav className="navbar">
              <Link to="/" className="logo">LiquorLooker</Link>
              <ul className="nav-links">
              { <div className="navbar-search">
                <TextField
                  id="navbar-search-tf"
                  label="Search"
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    style: { color: "azure" },
                  }}
                  value={searchStore}
                  onChange={(event) => setSearchStore(event.target.value)}
                  InputProps={{
                    style: { color: "azure"},
                    endAdornment: <Link to={`/businessInventory/${searchStore}`}>
                      <button>Search</button>
                    </Link>
                  }}
                  type="search"
                />
              </div> }
                <li className="nav-item">
                  <Link to="/login" className="link">Login</Link>
                </li>
                
              </ul>
            </nav>
    
          {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
          <Outlet />
        </div>
        
      );
    }
  }

  export default Layout;
