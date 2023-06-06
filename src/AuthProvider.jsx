import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isSignedIn, setIsSignedIn] = useState(false);

	const signIn = (username, email) => {
		setUser({ username, email });
		setIsSignedIn(true);
	};

	const signOut = () => {
		setUser(null);
		setIsSignedIn(false);
	};

	return (
		<AuthContext.Provider value={{ user, signIn, signOut, isSignedIn }}>
			{children}
		</AuthContext.Provider>
	);
}