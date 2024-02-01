import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import React, { FC, useRef, useState } from "react";

const SignUp: FC = () => {

	const app = getApp();
	const auth = getAuth(app);

	const usernameField = useRef<HTMLInputElement>(null);
	const emailField = useRef<HTMLInputElement>(null);
	const passwordField = useRef<HTMLInputElement>(null);

	const [signupHidden, setSignupVisibility] = useState<boolean>(true);

	const toggleSignUpVisibility = () => {
		setSignupVisibility(!signupHidden);
	}

	const handleLogIn = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, emailField.current!.value, passwordField.current!.value).catch(error => alert(error));
	}

	const handleSignUp = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		if (!signupHidden) createUserWithEmailAndPassword(auth, emailField.current!.value, passwordField.current!.value).catch(error => alert(error));
		toggleSignUpVisibility();
	}

	return (
		<>
			<input placeholder="username" type="text" ref={usernameField} hidden={signupHidden}/>
			<input placeholder="e-mail" type="email" ref={emailField}/>
            <input placeholder="password" type="password" ref={passwordField}/>
			<button onClick={handleLogIn}>Log In</button>
			<button onClick={handleSignUp}>{signupHidden ? "Create Account" : "Sign Up"}</button>
		</>
	);
};

export default SignUp;