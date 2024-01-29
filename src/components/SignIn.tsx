import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { FC, useRef } from "react";

const SignIn: FC = () => {

	const emailField = useRef<HTMLInputElement>(null);
	const passwordField = useRef<HTMLInputElement>(null);

	const handleLogIn = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		signInWithEmailAndPassword(getAuth(), emailField.current!.value, passwordField.current!.value);
	}

	return (
		<>
			<input placeholder="e-mail" type="email" ref={emailField}/>
            <input placeholder="password" type="password" ref={passwordField}/>
			<button onClick={handleLogIn}>Log In</button>
			<button>Sign Up</button>
		</>
	);
};

export default SignIn;