import { getApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { FC } from "react";

interface SignUpButtonProps {
    emailField: React.RefObject<HTMLInputElement>,
    passwordField: React.RefObject<HTMLInputElement>,
    signupHidden: boolean,
    onCreateAccount: () => void
}

const SignUpButton: FC<SignUpButtonProps> = ({emailField, passwordField, signupHidden, onCreateAccount}) => {

    const app = getApp();
    const auth = getAuth(app);

    const handleSignUp = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		if (!signupHidden) createUserWithEmailAndPassword(auth, emailField.current!.value, passwordField.current!.value)
			.catch(error => alert(error));
        onCreateAccount();
	}

	return (
        <button onClick={handleSignUp}>{signupHidden ? "Create Account" : "Sign Up"}</button>
	);

};

export default SignUpButton;