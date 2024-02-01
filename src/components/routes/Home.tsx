import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React, { FC } from "react";

const Home: FC = () => {

	const app = getApp();
	const auth = getAuth(app);

	return (
		<>
            {auth.currentUser?.email+" is currently signed in."}
			<button>Sign Out</button>
		</>
	);
};

export default Home;