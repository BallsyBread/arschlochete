import React, { FC } from "react";

const SignIn: FC = () => {
	return (
		<>
			<input placeholder="e-mail" type="email"/>
            <input placeholder="password" type="password"/>
			<button>Log In</button>
			<button>Sign In</button>
		</>
	);
};

export default SignIn;