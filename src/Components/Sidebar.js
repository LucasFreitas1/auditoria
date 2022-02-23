import React, { useState } from 'react'
import '../App.css';
import {SidebarData} from './SidebarData.js'
import DehazeIcon from '@mui/icons-material/Dehaze';
import {Link} from 'react-router-dom';

function Sidebar() {

const [sidebar, setSidebar] = useState(false);
const showSidebar = () => setSidebar(!sidebar);

  return (
      <>
    {/*<div className='navbar'>
        <Link to='#' className='menu-bars'>
            <DehazeIcon id="icon" onClick={showSidebar} />
        </Link>
  </div>    */}
        <div className='Sidebar'>
        <nav className={sidebar ? 'Sidebar active' : 'Sidebar'}>
            <ul className='SidebarList'>   
            <li className='nav-menu-itens' onClick={showSidebar}>
            
            </li>
                {SidebarData.map((val,key) => {
                    return (<li 
                        key={key}
                        className="row"
                        id={window.location.pathname === val.link ? "active":""} 
                        onClick={() => {
                            window.location.pathname = val.link;
                            }}
                            >
                            <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </div>
        
        </>
  )
}

export default Sidebar