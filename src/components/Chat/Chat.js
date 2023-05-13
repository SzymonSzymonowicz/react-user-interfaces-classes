import React, { useState } from "react";
import "./Chat.css";

function Chat() {
	const [visible, setVisible] = useState(false);

	const changeVisible = () => {
		setVisible(!visible);
	};

	return (
		<div className="chatArea">
			{visible ? (
				<div className="chatWindow">
					<div className="chatHeader">
						<div className="chatHeaderText">Chat with expert advisor</div>
						<div className="chatCloseButton" onClick={changeVisible}>
							<span className="material-symbols-outlined">close</span>
						</div>
					</div>
					<div className="chatContent"></div>
					<div className="chatInput">
						<textarea placeholder="Type message"></textarea>
					</div>
				</div>
			) : (
				<div className="chatIcon" onClick={changeVisible}>
					{/* {visible ? `Visible ` : `Not Visible`} */}
					<span className="material-symbols-outlined">forum</span>
				</div>
			)}
		</div>
	);
}

export default Chat;
