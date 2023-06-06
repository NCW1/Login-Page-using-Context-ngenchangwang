import { AuthProvider } from './AuthProvider';
import { SignInPage } from './SignInPage';
import { UserProfile } from './UserProfile';

export default function App() {
	return (
		<AuthProvider>
			<div>
				<SignInPage />
				<UserProfile />
			</div>
		</AuthProvider>
	);
}