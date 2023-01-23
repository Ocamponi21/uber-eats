import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {

    const navigate = useNavigate();

    const menuItems = [
        {
            key: '/',
            lable: 'Orders'
        },
        {
            key: 'menu',
            lable: 'Restaurant Menu'
        },
        {
            key: 'restaurant',
            lable: 'Create Restaurant Menu'
        }
        
    ];

    const onMenuItemClick = (menuItem) => {
        navigate(menuItem.key);
    };

    return (
        <Menu item={menuItems} onClick={onMenuItemClick} /> 
    );
};

export default SideMenu;
