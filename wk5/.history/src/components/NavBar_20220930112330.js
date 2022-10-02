import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamMenu from "./HamMenu";
import NavItem from "./NavItem";
import {Drawer} from "antd";

export default function NavBar() {

    const [isOnTouch,setIsOnTouch]=useState(false);
    const handleCloseDrawer=()=> setIsOnTouch(false);

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
        <Drawer
                title=" "
                placement={"left"}
                closable={false}
                onClose={handleCloseDrawer}
                visible={isOnTouch}
                key={"left"}
                width={400}
                zIndex={99}
                bodyStyle={{ backgroundColor: "#111828" }}
                headerStyle={{ backgroundColor: "#111828", color: "#fff" }}
            >
                <NavItem onClose={handleCloseDrawer} to="/tableware" className="nav-item" activeClassName="nav-item--active">
                    Tableware
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/cookware" className="nav-item" activeClassName="nav-item--active">
                    Cookware
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                    Home accessories
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/lighting" className="nav-item" activeClassName="nav-item--active">
                    Lighting
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/textile" className="nav-item" activeClassName="nav-item--active">
                    Textile
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/furniture" className="nav-item" activeClassName="nav-item--active">
                    Furniture
                </NavItem>
            </Drawer>




        </div>
    );
}