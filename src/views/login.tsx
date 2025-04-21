 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : login.tsx
*
* Description      : Login
*
* Author(s)        : Chetan Biradar
*
* Version History:
* <Version Number>                 <Author>                <date>        <defect Number>      <Modification
*                                                                                           made and the
*                                                                                           reason for
*                                                                                           modification >
*  1.0                            Chetan Biradar          14-04-2025         --              initial version
*
* References        :
*                     
* Assumption(s)     : None.
*                     
* Constraint(s)     : None.
*                     
 ****************************************************************************
*/ 
import React, { useState } from 'react';
// import Header from '../layout/mainHeader';
 import bgVideo from '../../public/videos/studyBg.mp4';
 import Logo from '../Images/ALTEN logo Black.png';
import Button from '../components/UI/button';
import Input from '../components/UI/input';
import Loader from '../components/UI/loader';
import { useUserContext } from '../contextApi/logiContext';
const Login: React.FC = () => {


  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const sessionError = queryParams.get("sessionError");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [videoError, setVideoError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(""); 
  const [isLoading, setIsLoading] = useState(false);
  const { logIn,  } = useUserContext();



  
 

  const fieldValidation = () => {
    let formIsValid = true;
    if (email.trim() === "") {
      formIsValid = false;
      setEmailError("Please enter Email");
    } else if (email.length < 1) {
      formIsValid = false;
      setEmailError("Email must be at least 1 characters long");
    } else if (email.length > 100) {
      formIsValid = false;
      setEmailError("email cannot exceed 100 characters");
    } else {
      setEmailError("");
    }

    // Password Validation
    if (password.trim() === "") {
      formIsValid = false;
      setPasswordError("Please enter password");
    } else if (password.length < 3) {
      formIsValid = false;
      setPasswordError("Password must be at least 3 characters long");
    } else if (password.length > 16) {
      formIsValid = false;
      setPasswordError("Password cannot exceed 16 characters");
    } else {
      setPasswordError("");
    }

    return formIsValid;
  };



  
  const handleLogin =async (e: React.FormEvent) => {
    console.log("Login error:")

    e.preventDefault();
    if (fieldValidation()) {
      try {
        setIsLoading(true);
        await logIn(email.trim(), password, "");
      } catch (error) {
        setPassword("");
        console.log("Login error:", error)
        // if (
        //   error.message === "Login failed" ||
        //   error.message === "Login status uncertain"
        // ) {
        //   alertTimerHandler();
        //   setIsLoading(false);
        // } else {
        //   serverTimerHandler();
        //   setIsLoading(false);
        // }
      }
    }
    console.log('Email:', email);
    console.log('Password:', password);

    
  };

  return (
    <>
    
      {/* Fullscreen background wrapper */}
  <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

  {/* Header */}
 <header className="absolute top-0 left-0 w-full z-20   px-6 py-3 flex items-center text-white  ">
  {/* Logo */}
  <div className="flex items-center space-x-2 ">
    <img src={Logo} alt="Logo" className="h-14 w-auto" />
    {/* <span className="text-xl font-semibold tracking-wide">MyApp</span> */}
  </div>

  {/* Navigation */}
  <nav className="hidden sm:flex space-x-6 text-sm font-serif ml-5">
    <a href="/" className="hover:text-blue-600 transition-colors duration-300">Home</a>
    <a href="/about" className="hover:text-blue-600 transition-colors duration-300">About</a>
    <a href="/dashboard" className="hover:text-blue-600 transition-colors duration-300">Dashboard</a>
    <a href="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
  </nav>
</header>


  {/* Background Video or Image */}
  {!videoError ? (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      autoPlay
      muted
      loop
      playsInline
      onError={() => setVideoError(true)}
    >
      <source src={bgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80"
      alt="Fallback Background"
      className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
    />
  )}
  <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[-1]" />

  {/* Login card */}
  <div className="relative z-10 w-full max-w-md px-4">
    <div>
    {isLoading && <Loader />}
    </div>
    <div className="bg-white backdrop-blur-md shadow-2xl rounded-md p-8 sm:p-10">
      <div className="text-center">
        <h1 className="text-2xl font-extrabold text-blue-700">Welcome Back</h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Sign in to your account and continue your journey with us.
        </p>
      </div>

      <form   className="mt-4 space-y-6">
        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          onChange={(val) => setEmail(val)}
          value={email}
          errorMsg={emailError}
        />
        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={(val) => setPassword(val)}
          value={password}
          errorMsg= {passwordError}
          
        />
        
        <Button
          text="Login"
          onClick={ handleLogin()}
          type="info"
          size="md"
          fullwidth={true}
        />
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don’t have an account?{' '}
        <a href="mailto:karuna.dangi@alten.com" className="text-blue-600 hover:underline font-medium">
          Contact Admin
        </a>
      </p>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;

