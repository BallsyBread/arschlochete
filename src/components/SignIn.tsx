import React, { FC, useRef } from "react";

const SignIn: FC = () => {

	const emailField = useRef<HTMLInputElement>(null);
	const passwordField = useRef<HTMLInputElement>(null);

	return (
		<>
			<input placeholder="e-mail" type="email" ref={emailField}/>
            <input placeholder="password" type="password" ref={passwordField}/>
			<button>Log In</button>
			<button>Sign In</button>
		</>
	);
};

export default SignIn;