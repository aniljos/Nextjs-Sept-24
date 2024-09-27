'use client'

import { AppThemeContext } from "@/app/state/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";

export default function AppBar(){

    const themeContext = useContext(AppThemeContext);

    function changeTheme(){
        if(themeContext.changeTheme)
            themeContext.changeTheme(themeContext.mode === "dark" ? "light" : "dark");
    }

    return (
        <nav className={`navbar navbar-${themeContext.mode} bg-${themeContext.mode}`}>
              <div className="container-fluid">
                <Link className="navbar-brand" href="/">Next.js</Link>
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/products">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/gadgets">Gadget Store</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/view-cart">View Cart</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/customers">Customers</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-warning" onClick={changeTheme}>Switch Theme</button>
                  </li>
                </ul>
              </div>
            </nav>
    )
}