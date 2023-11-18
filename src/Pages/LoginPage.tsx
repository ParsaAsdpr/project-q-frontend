import { useState } from "react";
import LoginForm from "@/Components/Login/LoginForm";
import FlipCard from "@/Components/Login/FlipCard";
import SignUpForm from "@/Components/Login/SignUpForm";
import { useTitle } from "@/utils/Hooks/useTitle";
import {motion} from 'framer-motion'

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
      <FlipCard
        isFlipped={isSignUp}
        Front={<LoginForm className="-translate-y-1/2" onSignUpClick={() => setIsSignUp(!isSignUp)} />}
        Back={<SignUpForm className="-translate-y-1/2" onLoginClick={() => setIsSignUp(!isSignUp)} />}
      />
    </motion.div>
  );
};
export default LoginPage;
