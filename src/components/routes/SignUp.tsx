import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import React, { FC, useRef, useState } from "react";
import LoginButton from "../LoginButton";

const SignUp: FC = () => {

	const app = getApp();
	const auth = getAuth(app);

	const usernameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [signupHidden, setSignupVisibility] = useState<boolean>(true);

	const toggleSignUpVisibility = () => {
		setSignupVisibility(!signupHidden);
	}

	const handleLogIn = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
			.then(credential => console.log(credential.user.email+" just signed in"))
			.catch(error => alert(error));
	}

	const handleSignUp = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		if (!signupHidden) createUserWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
			.catch(error => alert(error));
		toggleSignUpVisibility();
	}

	return (
		<>
			<input placeholder="username" type="text" ref={usernameRef} hidden={signupHidden}/>
			<input placeholder="e-mail" type="email" ref={emailRef}/>
            <input placeholder="password" type="password" ref={passwordRef}/>
			<LoginButton emailField={emailRef} passwordField={passwordRef}/>
			<button onClick={handleSignUp}>{signupHidden ? "Create Account" : "Sign Up"}</button>
		</>
	);
};

export default SignUp;