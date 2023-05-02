import React from 'react';
import SideBar from './SideBar';
import Products from './OrderPage';
import "./css/menu.css";

const Menu = () => {
  return (
    <div className='menu_light_container'>
        <div className='nav_component'>
           <SideBar />
        </div>

        <div className='products_container2'>
            <div className='product_header'>
                <h4>CHOOSE YOUR FAVORITE</h4>
                <h1>MENU LIGHT</h1>
            </div>
             <Products />
        </div>
    </div>
  )
}

export default Menu;