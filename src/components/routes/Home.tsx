import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React, { FC } from "react";

const Home: FC = () => {

	const app = getApp();
	const auth = getAuth(app);

	const handleSignOut = (event : React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		auth.signOut();
	}

	return (
		<>
            {auth.currentUser?.email+" is currently signed in."}
			<button onClick={handleSignOut}>Sign Out</button>
		</>
	);
};

export default Home;