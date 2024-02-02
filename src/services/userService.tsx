import { addDoc, collection, getFirestore } from "@firebase/firestore"
import { getApp } from "firebase/app";
import { UserCredential } from "firebase/auth"

const createUserAccount = (credentials : UserCredential) => {
    const app = getApp();
    const db = getFirestore(app);
    addDoc(collection(db, 'users'), { uid: credentials.user.uid, email: credentials.user.email });
}

export default createUserAccount;