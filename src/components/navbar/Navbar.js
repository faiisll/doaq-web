import React, {useEffect} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";
import {Home, Download, MessageSquare, Search} from "react-feather";
import {changeActive, changeKey} from "./navbarSlice";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

export default function Navbar() {
  const {keyword} = useSelector(state => state.navbar); 
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault();
    dispatch(changeKey(e.target.elements.key.value));

    history.push('/search');

    // console.log(e.target.elements.key.value);

  }

  return (
    <nav className="w-full py-10 px-2 flex justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="Logo" width="60px" />
      </Link>

      <form onSubmit={handleSubmit} className="md:block hidden">
        <div className="flex p-4 bg-white rounded-lg shadow-md border">
          <input
            name="key"
            type="text"
            value={keyword}
            className="focus:outline-none"
            placeholder="Search..."
            onChange={(e) => dispatch(changeKey(e.target.value))}
          />
          <button type="submit">
            <Search />
          </button>
        </div>
      </form>

      <div className="flex">
        <NavLink
          to="/"
          exact
          className="px-2"
          activeClassName="text-purple-500"
        >
          <Home />
        </NavLink>
        {/* <NavLink
          to="/bookmark"
          className="px-2"
          activeClassName="text-purple-500"
        >
          <Bookmark />
        </NavLink> */}
        <NavLink to="/feed" className="px-2" activeClassName="text-purple-500">
          <MessageSquare />
        </NavLink>
        <a href="https://play.google.com/store/apps/details?id=com.doaku" className="px-2">
          <Download />
        </a>
      </div>
    </nav>
  );
}
