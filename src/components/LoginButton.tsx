import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { FC } from "react";

interface LoginButtonProps {
    emailField: React.RefObject<HTMLInputElement>,
    passwordField: React.RefObject<HTMLInputElement>
}

const LoginButton: FC<LoginButtonProps> = ({emailField, passwordField}) => {

    const app = getApp();
    const auth = getAuth(app);

	const handleLogIn = (event : React.MouseEvent<HTMLButtonElement> ) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, emailField.current!.value, passwordField.current!.value)
			.then(credential => console.log(credential.user.email+" just signed in"))
			.catch(error => alert(error));
	}

	return (
        <button onClick={handleLogIn}>Log In</button>
	);

};

export default LoginButton;