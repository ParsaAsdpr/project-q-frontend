import { useState } from "react";
import LoginForm from "@/Components/Login/LoginForm";
import FlipCard from "@/Components/Login/FlipCard";
import SignUpWizard from "@/Components/Login/SignUp/SignUpWizard";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div
      className="h-screen w-full bg-[url('./assets/login-background.svg')] bg-fit flex items-center justify-center bg-no-repeat"
      dir="rtl"
    >
      <FlipCard
        isFlipped={isSignUp}
        Front={<LoginForm className="-translate-y-1/2" onSignUpClick={() => setIsSignUp(!isSignUp)} />}
        Back={<SignUpWizard className="-translate-y-1/2" onLoginClick={() => setIsSignUp(!isSignUp)} />}
      />
    </div>
  );
};
export default LoginPage;
