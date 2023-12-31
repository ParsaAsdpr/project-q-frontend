import { useState } from "react";
import LoginForm from "@/Components/Login/LoginForm";
import FlipCard from "@/Components/Login/FlipCard";
import SignUpForm from "@/Components/Login/SignUpForm";
import { useTitle } from "@/utils/Hooks/useTitle";
import {motion} from 'framer-motion'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  useTitle("ورود")
  return (
    <motion.div
      className="h-screen w-full bg-[url('./assets/login-background.svg')] bg-fit flex items-center justify-center bg-no-repeat"
      dir="rtl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.98 }
      }}
    >
      <ToastContainer />
      <FlipCard
        isFlipped={isSignUp}
        Front={<LoginForm className="-translate-y-1/2" onSignUpClick={() => setIsSignUp(!isSignUp)} isSignUp={isSignUp} />}
        Back={<SignUpForm className="-translate-y-1/2" onLoginClick={() => setIsSignUp(!isSignUp)} isSignUp={isSignUp} />}
      />
    </motion.div>
  );
};
export default LoginPage;
