import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import SignUp from "../components/SignUp/SignUp";

initializeAuthentication();
const useFirebase = (props) => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { name, email, password } = SignUp;
    // CreateUser Using google Email & Password 
    const createUserUsingEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                setUser(userCredential.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // SignIn Using google provider 
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    //Sign In using Github Provider
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // logout function call 
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("Inside state");
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        createUserUsingEmail,
        signInUsingGoogle,
        signInUsingGithub,
        logout
    }
}

export default useFirebase;