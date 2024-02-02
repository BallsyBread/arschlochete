import React, { FC, useRef, useState } from "react";
import LoginButton from "../LoginButton";
import SignUpButton from "../SignUpButton";

const SignUp: FC = () => {

	const usernameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [signupHidden, setSignupVisibility] = useState<boolean>(true);

	return (
		<>
			<input placeholder="username" type="text" ref={usernameRef} hidden={signupHidden}/>
			<input placeholder="e-mail" type="email" ref={emailRef}/>
            <input placeholder="password" type="password" ref={passwordRef}/>
			<LoginButton
				emailField={emailRef}
				passwordField={passwordRef}
			/>
        	<SignUpButton
				emailField={emailRef}
				passwordField={passwordRef}
				signupHidden={signupHidden}
				onCreateAccount={() => setSignupVisibility(!signupHidden)}
			/>


		</>
	);
};

export default SignUp;