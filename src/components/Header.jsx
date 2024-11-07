  import React, { useState } from 'react';
  import '../css/Header.css';
  import { CiLight } from "react-icons/ci";
  import { FaShoppingBasket, FaMoon } from "react-icons/fa";
  import { useNavigate } from 'react-router-dom';
  import Badge from '@mui/material/Badge';
  import { useSelector } from 'react-redux';
  import { useDispatch } from 'react-redux';
  import { setDrawer } from '../redux/slices/cartSlice';
  



  function Header() {
    const [theme, setTheme] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const{products} = useSelector((store)=>store.cart)

    const changeTheme = () => {
      setTheme(!theme);
    };

    return (
      <div className={`header-container ${theme ? 'dark-theme' : 'light-theme'}`}>
        <div className="logo-section" onClick={()=> navigate("/")}>
          <img className="logo" src="./src/images/z.webp" alt="Logo" />
          <p className="logo-text">Online Depom</p>
        </div>

        <div className="search-section">
          <input className="search-input" type="text" placeholder="Bir şeyler ara" />
        </div>
  
        <div className="icons-section">
          {theme ? (
            <FaMoon className="icons" onClick={changeTheme} />
          ) : ( 
            <CiLight className="icons" onClick={changeTheme} />
          )}
          <Badge onClick={()=>dispatch(setDrawer())} badgeContent={products.length} color="primary">
          <FaShoppingBasket className="icons" />
          </Badge>
        </div>
        

      </div>
    );
  }

  export default Header;
