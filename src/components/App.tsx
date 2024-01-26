import React, { FC, useState } from 'react';
import { getAuth } from 'firebase/auth';
import SignIn from './SignIn';
import Home from './Home';

const App: FC = () => {

	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getAuth().currentUser ? true : false);

	getAuth().onAuthStateChanged(() => setIsAuthenticated(!isAuthenticated));

	return (
		<>
			{isAuthenticated ? <Home /> : <SignIn /> }
		</>
	);
};

export default App;