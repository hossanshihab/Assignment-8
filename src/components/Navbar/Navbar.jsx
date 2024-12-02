import { useState, useEffect } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const location = useLocation(); 

  useEffect(() => {
    const storedCartList = JSON.parse(localStorage.getItem('cart-list')) || [];
    setCartCount(storedCartList.length);

    const storedWishList = JSON.parse(localStorage.getItem('wish-list')) || [];
    setWishCount(storedWishList.length);
  }, []);

  // Update document title based on the current route
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Home | Gadget Heaven';
        break;
      case '/statistics':
        document.title = 'Statistics | Gadget Heaven';
        break;
      case '/dashboard':
        document.title = 'Dashboard | Gadget Heaven';
        break;
      default:
        document.title = 'Gadget Heaven';
    }
  }, [location]);

  const navLinks = (
    <>
      <li className="text-white">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "bg-slate-700 p-3 rounded-2xl" : "hover:underline font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-white"> 
        <NavLink 
          to="/statistics" 
          className={({ isActive }) => 
            isActive ? "bg-slate-700 p-3 rounded-2xl" : "hover:underline font-bold"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            isActive ? "bg-slate-700 p-3 rounded-2xl" : "hover:underline font-bold"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-purple-800 p-4 w-11/12 mx-auto mt-10">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <NavLink to="/">
          <div className="text-3xl cursor-pointer font-bold text-white">
            Gadget Heaven
          </div>
        </NavLink>
        <ul className="hidden lg:flex space-x-8">
          {navLinks}
        </ul>
        <div className="flex space-x-4">
          <NavLink to="/cart" className="relative">
            <button className="text-white hover:text-gray-300">
              <FaShoppingCart size={30} color="yellow" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                  {cartCount}
                </span>
              )}
            </button>
            
          </NavLink>
          <NavLink to="/wish" className="relative">
            <button className="text-white hover:text-gray-300">
              <FaHeart size={30} color="red" />
              {wishCount > 0 && (
                <span className="absolute top-0 right-0 bg-white-500 text-white rounded-full text-xs px-1">
                  {wishCount}
                </span>
              )}
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;