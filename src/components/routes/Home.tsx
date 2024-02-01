import { getAuth } from "firebase/auth";
import React, { FC } from "react";

const Home: FC = () => {
	return (
		<>
            {getAuth().currentUser?.email+" is currently signed in."}
			<button>Sign Out</button>
		</>
	);
};

export default Home;