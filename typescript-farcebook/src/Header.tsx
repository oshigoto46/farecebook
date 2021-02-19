import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import { useState, useEffect } from "react";
import Modal from "react-modal";
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

    const  getNotifications = () => {
      const url = "http://54.65.109.14:3000/api/feed";
      fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
         const notifications :any[] = json.notifications
         console.log("notifications" + notifications);
         return notifications;
        // return json
        //return extractBooks(json);
      })
      .catch((err) => {
        console.error(err);
      });
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
        {getNotifications()}
        
      </Modal>
    </div>;
}

export default Header;