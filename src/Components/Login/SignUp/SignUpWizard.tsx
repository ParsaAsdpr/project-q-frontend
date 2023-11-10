import { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignUpNameForm from "./SignUpNameForm";

interface UserData {
  email: string;
  password: string;
    username: string;
    name: string;
}

interface Props {
  className?: string;
  onLoginClick: () => void;
}

const SignUpWizard = ({ className, onLoginClick }: Props) => {
  const [userData, setUserData] = useState({});
  const [step, setStep] = useState(1);

  const handleSubmit = (data: object) => {
    setStep(step + 1);
    if (step === 1) {
      setUserData(data);
      console.log(userData);
    }
    if (step === 2) {
      setUserData({...userData, ...data})
      console.log(userData);
    }
  };

  return (
    <div className={`${className} `}>
      {step === 1 && (
        <SignUpForm onLoginClick={onLoginClick} onSubmit={handleSubmit} />
      )}
      {step === 2 && (
        <SignUpNameForm onLoginClick={onLoginClick} onSubmit={handleSubmit} />
      )}
      {step === 3 && (
        <div>
          <p>name: {userData.name}</p>
          <p>email: {userData.email}</p>
          <p>password: {userData.password}</p>
          <p>username: {userData.username}</p>
        </div>

      )}
    </div>
  );
};

export default SignUpWizard;
