import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';
import SignUp from './SignUp';
import { auth } from '../firebaseConfig';

const App: FC = () => {

	const [user, loading] = useAuthState(auth);

	console.log(user);

	if (loading) return (
		<>
			Loading...
		</>
	);

	if (user) return (<Home/>);

	if (!user)return (<SignUp />);
};

export default App;