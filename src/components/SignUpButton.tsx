import { getApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { FC } from "react";

interface SignUpButtonProps {
    emailField: React.RefObject<HTMLInputElement>,
    passwordField: React.RefObject<HTMLInputElement>,
    registring: boolean,
    toggleRegistring: () => void
}

const SignUpButton: FC<SignUpButtonProps> = ({emailField, passwordField, registring, toggleRegistring}) => {

    const app = getApp();
    const auth = getAuth(app);

    const handleSignUp = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		createUserWithEmailAndPassword(auth, emailField.current!.value, passwordField.current!.value)
			.catch(error => alert(error));
	}

    const onClickHandler = registring ? handleSignUp : toggleRegistring;
    const buttonText = registring ? "Sign Up" : "Create Account";

	return (
        <button onClick={onClickHandler}>{buttonText}</button>
	);

};

export default SignUpButton;