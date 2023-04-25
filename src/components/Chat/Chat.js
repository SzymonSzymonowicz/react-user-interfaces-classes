import React, { useState } from "react";
import "./Chat.css";

function Chat() {
	const [visible, setVisible] = useState(false);

	const changeVisible = () => {
		setVisible(!visible);
	};

	return (
		<div className="chat" onClick={changeVisible}>
			<div>
				{visible && `Visible `}
				Chat
			</div>
		</div>
	);
}

export default Chat;
