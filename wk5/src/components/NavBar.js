import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';


export default function NavBar() {
    return (

        <div className="nav-bar">
            <Menu
                theme='dark'
                mode="vertical"
                className="menu"
                defaultSelectedKeys={['6']}
            >
                <Menu.Item key="1" className="menu-item">
                    <NavLink to="/tableware"
                        className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                        Tableware
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2" className="menu-item">
                    <NavLink to="/cookware"
                        className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                        Cookware
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3" className="menu-item">
                    <NavLink to="/home-accessories"
                        className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                        Home accessories
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4" className="menu-item">
                    <NavLink to="/lighting"
                        className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                        Lighting
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="5" className="menu-item">
                    <NavLink to="/textile"
                        className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                        Textile
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="6" className="menu-item">
                    <NavLink to="/furniture"
                        className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                        Furniture
                    </NavLink>
                </Menu.Item>

            </Menu>
        </div>
    );
}