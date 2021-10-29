import {useEffect, useState} from 'react'
import initializeAuth from '../Firebase/Firebaseinit';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";




initializeAuth();


const auth = getAuth();
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [users,setuser] = useState({});
    const [isLoading,setLoading] = useState(true);
    
    const SignUpwithGoogle = ()=> {
        setLoading(true)
        return signInWithPopup(auth, provider)
   }
  
   useEffect(() => {
    onAuthStateChanged(auth, user => {
        if (user) {
         setuser(user)
        } 
        else{
          setuser({})
        }
        setLoading(false)
      })

}, [])


const signouts = () => {
    setLoading(true)
      signOut(auth)
      .then(() => {
         setuser({});
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() =>  setLoading(false));
  }

    return {
        users,
        SignUpwithGoogle,
        signouts,
        isLoading

    }
};

export default useFirebase;