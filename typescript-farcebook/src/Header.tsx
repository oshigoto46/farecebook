import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import "./Header.css"

// const Header: React.FC = () => {
const Header = () => {
    return <div className="header__left">
       <div className="header__input">
        <SearchIcon />
        <input type="text" placeholder="Search Facebook" />
      </div>
      <div className="header__option">
        <StorefrontOutlinedIcon fontSize="large" />
      </div>
      <div className="header__option">
        <FlagIcon fontSize="large" />
      </div>
    </div>;
}

export default Header;