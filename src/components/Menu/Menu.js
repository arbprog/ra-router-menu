/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className='menu'>
      <NavLink className='menu__item' exact='true' activeclassname='menu__item-active' to='/'>{'Главная'}</NavLink>
      <NavLink className='menu__item' activeclassname='menu__item-active' to='/drift'>{'Дрифт-такси'}</NavLink>
      <NavLink className='menu__item' activeclassname='menu__item-active' to='/timeattack'>{'Time Attack'}</NavLink>
      <NavLink className='menu__item' activeclassname='menu__item-active' to='/forza'>{'Forza Karting'}</NavLink>
    </nav>
  );
}

export default Menu;
