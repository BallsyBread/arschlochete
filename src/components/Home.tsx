import React, { FC } from "react";
import { auth } from "../firebaseConfig";

const Home: FC = () => {
	return (
		<>
            {auth.currentUser+" is currently signed in."}
			<button>Sign Out</button>
		</>
	);
};

export default Home;