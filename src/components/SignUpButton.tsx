import { addDoc, collection, getDoc, getFirestore } from "@firebase/firestore";
import { getApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { FC } from "react";

interface SignUpButtonProps {
    emailField: React.RefObject<HTMLInputElement>,
    passwordField: React.RefObject<HTMLInputElement>,
    registring: boolean,
    toggleRegistring: (event : React.MouseEvent<HTMLButtonElement>) => void
}

const SignUpButton: FC<SignUpButtonProps> = ({emailField, passwordField, registring, toggleRegistring}) => {

    const app = getApp();
    const auth = getAuth(app);
    const db = getFirestore(app);

    const handleSignUp = (event : React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		createUserWithEmailAndPassword(auth, emailField.current!.value, passwordField.current!.value)
            .then(credentials => addDoc(collection(db, 'users'), { uid: credentials.user.uid, email: credentials.user.email }))
			.catch(error => alert(error));
	}

	return (
        <button onClick={registring ? handleSignUp : toggleRegistring}>
            {registring ? "Sign Up" : "Create Account"}
        </button>
	);

};

export default SignUpButton;