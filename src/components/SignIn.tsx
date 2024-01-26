import { getAuth } from "firebase/auth";
import React, { FC } from "react";

const SignIn: FC = () => {
	return (
		<>
			{getAuth().currentUser+" is currently signed in."}
		</>
	);
};

export default SignIn;