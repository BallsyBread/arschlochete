import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { FC } from "react";

interface LoginButtonProps {
    emailField: React.RefObject<HTMLInputElement>,
    passwordField: React.RefObject<HTMLInputElement>,
    registring: boolean,
    toggleRegistring: () => void
}

const LoginButton: FC<LoginButtonProps> = ({emailField, passwordField, registring, toggleRegistring}) => {

    const app = getApp();
    const auth = getAuth(app);

	const handleLogIn = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, emailField.current!.value, passwordField.current!.value)
			.catch(error => alert(error));
	}

    const onClickHandler = registring ? toggleRegistring : handleLogIn;
    const buttonText = registring ? "Back" : "Log In";

	return (
        <button onClick={onClickHandler}>{buttonText}</button>
	);

};

export default LoginButton;