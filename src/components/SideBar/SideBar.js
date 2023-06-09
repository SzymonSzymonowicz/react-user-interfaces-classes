import "./SideBar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeContext from "../ThemeContext";
import { useAuth } from "../../hooks/useAuth";

function SideBar() {
	const [previousFontSize, setPreviousFontSize] = useState(getComputedStyle(document.documentElement).getPropertyValue("--base-font-size"));
	const { toggleDarkmode } = useContext(ThemeContext);

	const { user, logout } = useAuth();

	const increaseFontSize = () => {
		alterFontSize((x) => x + 1);
	};

	const decreaseFontSize = () => {
		alterFontSize((x) => x - 1);
	};

	const alterFontSize = (changeFun) => {
		var increased = changeFun(parseInt(previousFontSize, 10)) + "px";
		setPreviousFontSize(increased);
		setFontSize(increased);
	};

	const setFontSize = (size) => {
		setCssPropertyValue("base-font-size", size);
	};

	const setCssPropertyValue = (propertyName, value) => {
		document.documentElement.style.setProperty("--" + propertyName, value);
	};

	return (
		<div className="side-bar">
			<div className="side-bar-item header">
				<div>
					<Link to="/">Logo</Link>
				</div>
				<div>
					<span className="material-symbols-outlined">first_page</span>
				</div>
			</div>
			<div className="side-bar-item user-info">
				<span>Welcome {user?.username}!</span>
				<div>
					<button onClick={logout}>Logout</button>
				</div>
			</div>
			<div className="side-bar-item">
				<Link to="/portfolio">My portfolio</Link>
			</div>
			<div className="side-bar-item">
				<Link to="/stocks">Stocks</Link>
			</div>
			<div className="side-bar-item">
				<Link to="/gm">General meetings</Link>
			</div>
			<div className="side-bar-item">
				<Link to="/help">Help</Link>
			</div>

			<div className="utils">
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
	);
}

export default SideBar;
