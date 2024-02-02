import React, { FC, useRef, useState } from "react";
import LoginButton from "../LoginButton";
import SignUpButton from "../SignUpButton";

const SignUp: FC = () => {

	const usernameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [registring, setRegistring] = useState<boolean>(false);

	return (
		<>
			<input placeholder="username" type="text" ref={usernameRef} hidden={!registring}/>
			<input placeholder="e-mail" type="email" ref={emailRef}/>
            <input placeholder="password" type="password" ref={passwordRef}/>
			<LoginButton
				emailField={emailRef}
				passwordField={passwordRef}
				registring={registring}
				toggleRegistring={() => setRegistring(!registring)}
			/>
        	<SignUpButton
				emailField={emailRef}
				passwordField={passwordRef}
				registring={registring}
				toggleRegistring={() => setRegistring(!registring)}
			/>
		</>
	);
};

export default SignUp;