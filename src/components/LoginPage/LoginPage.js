import { useAuth } from "../../hooks/useAuth";
import "./LoginPage.css";
import React, { useState } from "react";

function LoginPage() {
	const [providedUsername, setProvidedUsername] = useState();
	const [providedPassword, setProvidedPassword] = useState();

	const { login } = useAuth();

	const handleLogin = (event) => {
		console.log(event);
		login(providedUsername, providedPassword);
	};

	return (
		<div className="authPage">
			<div className="authContainer">
				<div className="authHeader">Logo</div>
				<div className="loginForm">
					<input placeholder="username" onChange={(event) => setProvidedUsername(event.target.value)} />
					<input placeholder="password" type="password" onChange={(event) => setProvidedPassword(event.target.value)} />
					<button onClick={handleLogin}>Login</button>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
