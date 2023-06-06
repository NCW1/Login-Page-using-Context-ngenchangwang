import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export const UserProfile = () => {
	const { user, signOut } = useContext(AuthContext);
	const isSignedIn = !!user;

	if (!user || !isSignedIn) {
		return null;
	}

	return (
		<div>
			<h2>User Profile</h2>
			<div>
				<strong>Username:</strong> {user.username}
			</div>
			<br />
			<div>
				<strong>E-mail:</strong> {user.email}
			</div>
			<br />
			<button onClick={signOut}>Sign Out</button>
		</div>
	);
}