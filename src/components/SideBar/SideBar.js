import './SideBar.css';
import React from 'react';

function SideBar() {
  return (
    <div className="side-bar">
        <ul>
            <li>Overview</li>
            <li>Portfolio</li>
            <li>Stock</li>
            <li>Help</li>
        </ul>

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