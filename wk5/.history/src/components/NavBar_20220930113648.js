import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamMenu from "./HamMenu";
import { Drawer } from "antd";

export default function NavBar() {

    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);

    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />

            <div className="nav-bar">
                <NavLink to="/tableware"
                    className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                    Tableware
                </NavLink>
                <NavLink to="/cookware"
                    className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                    Cookware
                </NavLink>
                <NavLink to="/home-accessories"
                    className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                    Home accessories
                </NavLink>
                <NavLink to="/lighting"
                    className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                    Lighting
                </NavLink>
                <NavLink to="/textile"
                    className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                    Textile
                </NavLink>
                <NavLink to="/furniture"
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
                <NavLink to="/tableware" onClose={handleCloseDrawer} className="nav-item" activeClassName="nav-item--active">
                    Tableware
                </NavLink>
                <NavLink to="/cookware" onClose={handleCloseDrawer} className="nav-item" activeClassName="nav-item--active">
                    Cookware
                </NavLink>
                <NavLink to="/home-accessories" onClose={handleCloseDrawer} className="nav-item" activeClassName="nav-item--active">
                    Home accessories
                </NavLink>
                <NavLink to="/lighting" onClose={handleCloseDrawer} className="nav-item" activeClassName="nav-item--active">
                    Lighting
                </NavLink>
                <NavLink to="/textile" onClose={handleCloseDrawer} className="nav-item" activeClassName="nav-item--active">
                    Textile
                </NavLink>
                <NavLink to="/furniture" onClose={handleCloseDrawer} className="nav-item" activeClassName="nav-item--active">
                    Furniture
                </NavLink>
            </Drawer>




        </div>
    );
}