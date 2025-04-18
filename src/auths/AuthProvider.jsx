import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import app from "./firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const axiosPublicly = useAxiosPublic()
    const [registered, setRegistered] = useState(false);
    const [user, setUser] = useState([]); //useState(null)
    const [loading, setLoading] = useState(null); //useState(true)



    //firebase lookup
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            //jwt => get token and set client
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublicly.post("jwt", userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            //can be checked from client side=>inspect==>Application==>LocalStorage==>clientURL[when login/logout]
                        }
                    })
            }
            else {
                //TO DO : remove token(if token stored in the client side [localStorage, caching, inMemory])
                //for HTTP only== cookies need to remove from server side
                localStorage.removeItem('access-token')
            }
            setLoading(false);

        })
        return (() => unSubscribe())
    }, [auth, axiosPublicly]) //  auth is not needed as a dependency


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    //google
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    const authInfo = { registered, setRegistered, user, loading, setLoading, createUser, userLogin, logout, updateUserProfile, googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;