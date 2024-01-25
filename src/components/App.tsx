import React, { FC } from 'react';
import { getAuth } from 'firebase/auth';
import SignIn from './SignIn';
import Home from './Home';

const App: FC = () => {
	return (
		<>
			{getAuth().currentUser ? <SignIn /> : <Home />}
		</>
	);
};

export default App;