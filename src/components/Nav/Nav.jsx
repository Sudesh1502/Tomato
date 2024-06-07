import './Nav.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Nav = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home");

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navBar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>

      <ul className="navMenu">
        <Link to='/' onClick={()=>{
            setMenu("Home")
        }} className={menu==="Home" ? "active":""}>Home</Link>
        <a href='#exploreMenu' onClick={()=>{
            setMenu("Menu")
        }} className={menu==="Menu" ? "active":""}>Menu</a>
        <a href='#appDownload' onClick={()=>{
            setMenu("MobileApp")
        }} className={menu==="MobileApp" ? "active":""}>Mobile App</a>
        <a href='#footer' onClick={()=>{
            setMenu("ContactUs")
        }} className={menu==="ContactUs" ? "active":""}>Contact Us</a>
      </ul>

      <div className="navRight">
        <img src={assets.search_icon} alt="" />
        <div className="navbarSearchIcon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            {getTotalCartAmount() > 0 ?<div className="dot"></div> : <></>}
        </div>
        <button className='SignIn' onClick={()=>{
          setShowLogin(true)
        }}>Sign in</button>
      </div>
    </div>
  )
}

export default Nav
