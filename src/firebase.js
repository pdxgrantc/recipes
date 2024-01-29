// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkx8Nhw7PTv2cIfjJxAb9QtuNpenU6yG4",
  authDomain: "recipes-98bf2.firebaseapp.com",
  projectId: "recipes-98bf2",
  storageBucket: "recipes-98bf2.appspot.com",
  messagingSenderId: "190565155472",
  appId: "1:190565155472:web:6f1ae3451a873ca7680e15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const db = getFirestore();
        const userRef = doc(db, 'users', result.user.uid);
        const userDocSnap = await getDoc(userRef);

        if (!userDocSnap.exists()) {
            await setDoc(userRef, {
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
                uid: result.user.uid,
                createdAt: new Date(),
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const signOutUser = () => {
    signOut(auth);
}
