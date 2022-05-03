import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import axios from "axios";
import { async } from "@firebase/util";

const useAUth = () => {
    const [user, existingLoading, existingError] = useAuthState(auth);
    
  
  const [signInWithEmailAndPassword, SigninUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);
  const [
    createUserWithEmailAndPassword,
    createUser,
    signinLoading,
    createEerror,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(
    auth
  );
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation()
  
  const from = location.state?.from?.pathname || "/";
  if(SigninUser || googleuser){
    navigate(from, { replace: true });

  }
  

  const signupHandeler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    if (createEerror) {
      toast.error(createEerror.message);
    } else if (!name) {
      toast.error("Name field cannot be empty");
    } else if (!email) {
      toast.error("Email field cannot be empty");
    } else if (!phone) {
      toast.error("Phone field cannot be empty");
    } else if (!password) {
      toast.error("Password field cannot be empty");
    } else {
      createUserWithEmailAndPassword(email, password)
      .then(()=>{
        updateProfile({displayName:name,phoneNumber:Number})
      })
      toast.success("Signup succesfully");
       navigate("/login")
      await sendEmailVerification();
    }
  };

  const handleSignin = async(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email) {
      toast.error("Email field cannot be empty");
    } else if (!password) {
      toast.error("Password field cannot be empty");
    } else {
      signInWithEmailAndPassword(email, password);
      toast.success("Login succesfully");
      
    }

   
  };

 

  const logout = (e) => {
    e.preventDefault();
    signOut(auth);
    navigate("/login");
  };

  const resetpass =async (e) => {
      e.preventDefault()
      const email = e.target.email.value
      if(!email){
          toast.error("Please provide a valid email")
      }else{
        await sendPasswordResetEmail(email)
        toast.success(" Reset email sent to your email")

      }
   

  };
  const googleSignin = ()=> {
    signInWithGoogle()
  }

  return { handleSignin, signupHandeler, logout,resetpass ,googleSignin};
};

export default useAUth;
