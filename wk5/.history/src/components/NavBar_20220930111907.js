import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamMenu from "./HamMenu";

export default function NavBar() {

    const [isOnTouch,setIsOnTouch]=useState(false);


    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />

        <div className="nav-bar">
            <NavLink to="/category/tableware"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Tableware
            </NavLink>
            <NavLink to="/category/cookware"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Cookware
            </NavLink>
            <NavLink to="/category/home-accessories"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Home accessories
            </NavLink>
            <NavLink to="/category/lighting"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Lighting
            </NavLink>
            <NavLink to="/category/textile"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Textile
            </NavLink>
            <NavLink to="/category/furniture"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Furniture
            </NavLink>
        </div>
        </div>
    );
}