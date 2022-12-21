import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../image/logo/study-group-logo-template-design_20029-469.webp";
import { AuthContext } from '../../../Contexts/AuthProvider';


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(err => console.log(err))
  }


  const menuItems =(
    <React.Fragment>
      <li className="font-semibold" tabIndex={0}>
       <Link>
          HOME
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
       </Link>
        <ul className="p-2 bg-base-100">
          <li><Link>Submenu 1</Link></li>
          <li><Link>Submenu 2</Link></li>
        </ul>
      </li>
      <li className="font-semibold"  tabIndex={0}>
       <Link>
          COURSES
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
       </Link>
        <ul className="p-2 bg-base-100">
          <li><Link>Submenu 1</Link></li>
          <li><Link>Submenu 2</Link></li>
        </ul>
      </li>
      <li className="font-semibold"  tabIndex={0}>
       <Link>
          PAGES
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
       </Link>
        <ul className="p-2 bg-base-100">
          <li><Link>Submenu 1</Link></li>
          <li><Link>Submenu 2</Link></li>
        </ul>
      </li>
      <li className="font-semibold"  tabIndex={0}>
       <Link>
          INSTRUCTORS
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
       </Link>
        <ul className="p-2 bg-base-100">
          <li><Link>Submenu 1</Link></li>
          <li><Link>Submenu 2</Link></li>
        </ul>
      </li>
      <li className="font-semibold"  tabIndex={0}>
       <Link>
          BLOGS
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
       </Link>
        <ul className="p-2 bg-base-100">
          <li><Link>Submenu 1</Link></li>
          <li><Link>Submenu 2</Link></li>
        </ul>
      </li>
      {
         user?.email?
         <li className='font-semibold'>
          <Link to="/login"><button onClick={handleLogOut} className='btn btn-ghost'>Sign Out</button></Link>
         </li>
        :
      <li><Link to='/login'><button className="btn btn-outline">Login</button></Link></li>
      }
      
    </React.Fragment>
  )
  return (
    <div className="navbar p-2 bg-base-100">
      <div className="ml-10 flex-1">
          <div className="avatar mr-5 w-32 h-32 rounded-xl">
            <img src={logo} alt="" />
          </div>
         <Link to="/" className="font-semibold normal-case text-5xl">ACADU</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
           {menuItems}
          </ul>
        </div>
      
    </div>
  );
};

export default Navbar;
