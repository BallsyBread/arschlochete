import { getAuth } from 'firebase/auth';
import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';
import SignUp from './SignUp';
import { getApp } from 'firebase/app';

const App: FC = () => {

	const [user, loading] = useAuthState(getAuth(getApp()));

	if (loading) return (
		<>
			Loading...
		</>
	);

	if (user) return (<Home/>);

	if (!user)return (<SignUp />);
};

export default App;