import { getAuth } from 'firebase/auth';
import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import { getApp } from 'firebase/app';

const App: FC = () => {

	const app = getApp();
	const auth = getAuth(app);

	const [user, loading] = useAuthState(auth);

	if (loading) return (
		<>
			Loading...
		</>
	);

	if (user) return (<Home/>);

	if (!user)return (<SignUp />);
};

export default App;