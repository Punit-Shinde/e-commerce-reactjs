import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <div className='logo'>
            <h2>Stylish<span>Steps</span></h2>
        </div>
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      
        <ul className="nav-icons">
            <BrowserRouter>
            <li><Link className='Link' href='#'><FiHeart className="nav-icons" /></Link></li>
            <li><Link className='Link' href='#'><AiOutlineShoppingCart className="nav-icons" /></Link></li>
            <li><Link className='Link' href='#'><AiOutlineUserAdd className="nav-icons" /></Link></li>
            </BrowserRouter>
        </ul>
      </div>
        {/* <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div> */}
    </nav>
  );
};

export default Nav;
