import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Notifications from "./Notifications";

import "./Header.css"

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: 0,
    transform: "translate(-50%, -50%)"
  }
};




// const Header: React.FC = () => {
const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleAddClick = () => {
     setModalIsOpen(true); 
    };

    const handleModalClose = () => {
      setModalIsOpen(false);
    };

   


    return <div className="header__left">
       <div className="header__input">
        <SearchIcon />
        <input type="text" placeholder="Search Facebook" />
      </div>
      <div className="header__option">
        <StorefrontOutlinedIcon fontSize="large" />
      </div>
      <div className="header__option">
        <FlagIcon fontSize="large" onClick={handleAddClick} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        style={customStyles}
      >
        <Notifications />
        
      </Modal>
    </div>;
}

export default Header;