import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
	console.log(useAuth());
	const { user } = useAuth();

	if (!user) {
		// user is not authenticated
		return <Navigate to="/login" />;
	}

	return children;
};
