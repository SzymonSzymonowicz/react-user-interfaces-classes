import './SideBar.css';
import React from 'react';

function SideBar() {
  return (
    <div className="side-bar">
        <div className="side-bar-item header">
            <div>Logo</div>
            <div>
            <span class="material-symbols-outlined">
                first_page
            </span>
            </div>
        </div>

        <div className='side-bar-item'>My portfolio</div>
        <div className='side-bar-item'>Stocks</div>
        <div className='side-bar-item'>General meetings</div>
        <div className='side-bar-item'>Help</div>

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