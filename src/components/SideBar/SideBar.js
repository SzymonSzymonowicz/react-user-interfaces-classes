import './SideBar.css';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import ThemeContext from '../ThemeContext';

function SideBar() {

    const [previousFontSize, setPreviousFontSize] = useState(getComputedStyle(document.documentElement).getPropertyValue('--base-font-size'));

    const previousPrimaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    const previousSecondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    const previousFontColor= getComputedStyle(document.documentElement).getPropertyValue('--font-color');

    const [isDarkmodeToggled, setIsDarkmodeToggled] = useState(false);


    const { toggleDarkmode } = useContext(ThemeContext);

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
        setCssPropertyValue("base-font-size", size);
    }

    const setCssPropertyValue = (propertyName, value) => {
        document.documentElement.style.setProperty(
            "--" + propertyName,
            value,
        )
    }


    useEffect(() => {
        console.log("Reacting to darkmode change:" + isDarkmodeToggled);
        console.table([previousPrimaryColor, previousSecondaryColor, previousFontColor]);

        if(isDarkmodeToggled) {
            setCssPropertyValue("primary-color", "black");
            setCssPropertyValue("secondary-color", "grey");
            setCssPropertyValue("font-color", "yellow");
        } else {
            setCssPropertyValue("primary-color", previousPrimaryColor);
            setCssPropertyValue("secondary-color", previousSecondaryColor);
            setCssPropertyValue("font-color", previousFontColor);
        }
    });

    const setDarkmodeTheme = () => {
        console.log("setting darkmode, actual: " + isDarkmodeToggled + " to be set: " + !isDarkmodeToggled);
        setIsDarkmodeToggled(!isDarkmodeToggled);
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

            <span className="material-symbols-outlined" onClick={() => toggleDarkmode()}>
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