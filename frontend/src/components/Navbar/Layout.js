import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
import { TextField } from "@mui/material";

const Layout = () => {
    return (
      <div className="container">
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */} 
          
          <nav className="navbar">
            <Link to="/" className="logo">LiquorLooker</Link>
            <ul className="nav-links">
            {/* <div className="navbar-search">
              <TextField
                id="navbar-search-tf"
                label="Search"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  style: { color: "azure" },
                }}
                InputProps={{
                  style: { color: "azure"},
                }}
                type="search"
              />
            </div> */}
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

  export default Layout;
