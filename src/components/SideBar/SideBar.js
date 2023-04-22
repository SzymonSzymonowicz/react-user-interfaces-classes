import './SideBar.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

function SideBar() {

    const [previousFontSize, setPreviousFontSize] = useState(getComputedStyle(document.documentElement).getPropertyValue('--base-font-size'));

    const increaseFontSize = () => {
        alterFontSize(x => x + 1);
    }

    const decreaseFontSize = () => {
        alterFontSize(x => x - 1);
    }

    const alterFontSize = (changeFun) => {
        console.log("fired + prev: " + previousFontSize);
        var increased = changeFun(parseInt(previousFontSize, 10)) + 'px';
        console.log("about to set: " + increased)
        setPreviousFontSize(increased);
        setFontSize(increased);
    }

    const setFontSize = (size) => {
        document.documentElement.style.setProperty(
            "--base-font-size",
            size,
        )
    }

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

            <span className="material-symbols-outlined">
                contrast
            </span>
            
            <span className="material-symbols-outlined" onClick={() => increaseFontSize()}>
                text_increase
            </span>
            <span className="material-symbols-outlined" onClick={() => decreaseFontSize()}>
                text_decrease
            </span>
        </div>
    </div>
  )
}

export default SideBar