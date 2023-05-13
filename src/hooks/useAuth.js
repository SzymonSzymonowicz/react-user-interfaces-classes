import { createContext, useContext } from "react";
// import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "./useSessionStorage.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useSessionStorage("user", null);
	const navigate = useNavigate();

	const users = [
		{
			username: "test",
			password: "test",
		},
		{
			username: "admin",
			password: "admin",
		},
	];

	const checkCredentials = (username, password) => {
		return users.some((definedUser) => definedUser.password === password && definedUser.username === username);
	};

	const login = (username, password) => {
		if (checkCredentials(username, password)) {
			setUser({ username, password });
			navigate("/");
		} else {
			console.log("Failed to login due to wrong credentials");
		}
	};

	const logout = () => {
		setUser(null);
		navigate("/login", { replace: true });
	};

	// const value = useMemo(
	// 	() => ({
	// 		user,
	// 		login,
	// 		logout,
	// 	}),
	// 	[user]
	// );

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
	// return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
	return useContext(AuthContext);
};
