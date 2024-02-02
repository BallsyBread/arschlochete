import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { FC } from "react";

interface LoginButtonProps {
    emailField: React.RefObject<HTMLInputElement>,
    passwordField: React.RefObject<HTMLInputElement>,
    registring: boolean,
    toggleRegistring: (event : React.MouseEvent<HTMLButtonElement>) => void
}

const LoginButton: FC<LoginButtonProps> = ({emailField, passwordField, registring, toggleRegistring}) => {

    const app = getApp();
    const auth = getAuth(app);

	const handleLogIn = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, emailField.current!.value, passwordField.current!.value)
			.catch(error => alert(error));
	}

	return (
        <button onClick={registring ? toggleRegistring : handleLogIn}>
            {registring ? "Back" : "Log In"}
        </button>
	);

};

export default LoginButton;