import { getAuth } from "firebase/auth";
import React, { FC } from "react";

const Home: FC = () => {
	return (
		<>
            {getAuth().currentUser+" is currently signed in."}
		</>
	);
};

export default Home;