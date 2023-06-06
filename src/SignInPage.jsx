import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';

export const SignInPage = () => {
	const { signIn, isSignedIn } = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');

	const handleSignIn = (e) => {
		e.preventDefault();
		signIn(username, email);
	};

	if (isSignedIn) {
		return null;
	}

	return (
		<div>
			<form onSubmit={handleSignIn}>
				<h1>Login Page</h1>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br /><br />
				<input
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br /><br />
				<button type="submit">Sign In</button>
				<p>Please sign in to view your profile.</p>
			</form>
		</div>
	);
}