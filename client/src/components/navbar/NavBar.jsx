import React, { useContext } from 'react'
import "./NavBar.scss"
import { Link } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const NavBar = () =>{
  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>mySocio</span>
        </Link>
        <HomeOutlinedIcon style={{cursor:"pointer"}} />

        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} style={{cursor:"pointer"}} />
        ):(
          <DarkModeOutlinedIcon onClick={toggle} style={{cursor:"pointer"}} />
        )
        }

        <GridViewOutlinedIcon style={{cursor:"pointer"}} />
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src={"/upload/"+currentUser.profilePic} alt="img"/>
          <Link
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
          >
          <span>{currentUser.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
