import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import React, { FC, useRef, useState } from "react";

const SignUp: FC = () => {

	const [signupHidden, toggleSignupVisibility] = useState<boolean>(false);

	const usernameField = useRef<HTMLInputElement>(null);
	const emailField = useRef<HTMLInputElement>(null);
	const passwordField = useRef<HTMLInputElement>(null);

	const handleLogIn = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		signInWithEmailAndPassword(getAuth(), emailField.current!.value, passwordField.current!.value);
	}

	const handleSignUp = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		if (!signupHidden) createUserWithEmailAndPassword(getAuth(), emailField.current!.value, passwordField.current!.value);
		toggleSignupVisibility(!signupHidden);
	}

	return (
		<>
			<input placeholder="username" type="text" ref={usernameField} hidden={signupHidden}/>
			<input placeholder="e-mail" type="email" ref={emailField}/>
            <input placeholder="password" type="password" ref={passwordField}/>
			<button onClick={handleLogIn}>Log In</button>
			<button onClick={handleSignUp}>Sign Up</button>
		</>
	);
};

export default SignUp;