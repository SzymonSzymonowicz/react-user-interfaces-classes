import './SideBar.css';
import React from 'react';
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="side-bar">
        <div className="side-bar-item header">
            <div><Link to="/">Logo</Link></div>
            <div>
            <span class="material-symbols-outlined">
                first_page
            </span>
            </div>
        </div>
        <div className='side-bar-item'><Link to="/portfolio">My portfolio</Link></div>
        <div className='side-bar-item'><Link to="/stocks">Stocks</Link></div>
        <div className='side-bar-item'><Link to="/gm">General meetings</Link></div>
        <div className='side-bar-item'><Link to="/help">Help</Link></div>

        <div className='utils'>

            <span class="material-symbols-outlined">
                contrast
            </span>
            
            <span class="material-symbols-outlined">
                text_increase
            </span>
            <span class="material-symbols-outlined">
                text_decrease
            </span>
        </div>
    </div>
  )
}

export default SideBar