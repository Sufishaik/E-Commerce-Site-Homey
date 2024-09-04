import { useEffect, useState } from 'react';
import { BsCart3, BsFillPersonPlusFill, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeImage from "../assets/img.webp";
import { clearCart } from '../Features/Cart/CartSlice';
import { logoutUser } from '../Features/User/UserSlice';
import { NavLinks } from './Navlinks';
import React from 'react';
const themes = {
  autumn: 'autumn',
  luxury: 'luxury',
};

const getThemeLocalStorage = () => {
  return localStorage.getItem('theme') || themes.autumn;
};

export const Navbar = () => {
  const [theme, setTheme] = useState(getThemeLocalStorage());
  const handleTheme = () => {
    const { autumn, luxury } = themes;
    const newTheme = theme === autumn ? luxury : autumn;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const numItemsInCart = useSelector((state) => state.cartSlice?.numItemsInCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  return (
    <>
      <nav className='bg-base-200'>
        <div className='navbar align-element'>
          <div className='navbar-start'>
            <NavLink to="/" className="hidden lg:flex btn item-center">
              <img src={HomeImage} alt="" className="w-15 h-12" />
            </NavLink>
            <div className='dropdown'>
              <div className='w-full'>
                <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                  <FaBarsStaggered className='h-6 w-6' />
                </label>
                <ul tabIndex={0} className='menu menu-sm dropdown-content mt-10 z-[1] p-2 shadow bg-base-100 rounded-box w-100'>
                  <NavLinks />
                </ul>
              </div>
            </div>
          </div>
          <div className='navbar-center hidden lg:flex h-40'>
            <ul className='menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box'>
              <NavLinks />
            </ul>
          </div>
          <div className='navbar-end'>
            <label className='swap swap-rotate'>
              <input type="checkbox" onChange={handleTheme} />
              {theme === themes.luxury ? (
                <BsMoonFill className='h-6 w-6' />
              ) : (
                <BsSunFill className='h-6 w-6' />
              )}
            </label>

            <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-6">
              <div className='indicator'>
                <BsCart3 className='h-6 w-6' />
                <span className='badge badge-sm badge-primary indicator-item'>
                  {numItemsInCart}
                </span>
              </div>
            </NavLink>
            <div className='justify-center items-center gap-x-4'>
              {user ? (
                <div className='flex gap-x-2 sm:gap-x-8 items-center'>
                  <p className='text-xs sm:text-sm'>Hello, {user?.username}</p>
                  <button className='btn btn-xs btn-outline btn-primary' onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <NavLink to="/login" className="btn btn-ghost btn-md ml-6">
                  <div className='indicate'>
                    <BsFillPersonPlusFill className='h-6 w-6' />
                  </div>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
