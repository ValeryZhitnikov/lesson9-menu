import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const menuItems = [
    {
      'text' : 'Главная',
      'to' : '/'
    },
    {
      'text' : 'Дрифт-такси',
      'to' : '/drift'
    },
    {
      'text' : 'Time Attack',
      'to' : '/timeattack'
    },
    {
      'text' : 'Forza Karting',
      'to' : '/forza'
    }
  ];

  const menuList = menuItems.map((item, i) => {
    return <NavLink key={i} className={({ isActive }) => isActive ? 'menu__item menu__item-active' : 'menu__item'} to={item.to}>{item.text}</NavLink>
  })

  return (
    <nav className="menu">
      {menuList}
    </nav>
  );
}