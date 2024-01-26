import React, { FC } from "react";

const SignUp: FC = () => {
	return (
		<>
            <input placeholder="username" />
            <input placeholder="e-mail" type="email"/>
            <input placeholder="password" type="password"/>
            <button>Create Account</button>
		</>
	);
};

export default SignUp;