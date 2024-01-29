import { getAuth } from 'firebase/auth';
import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';
import SignIn from './SignIn';

const App: FC = () => {

	const [user, loading] = useAuthState(getAuth());

	if (loading) return (
		<>
			Loading...
		</>
	);

	if (user) return (<Home/>);

	if (!user)return (<SignIn />);
};

export default App;