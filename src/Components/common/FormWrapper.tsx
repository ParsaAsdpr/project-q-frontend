import React from "react";
import GoogleButton from "../Login/GoogleButton";

interface Props {
  className?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onOptionClick: () => void;
  submitText: string;
  title: string;
  description: string;
  options?: {
    text: string;
    linkText: string;
    onClick: () => void;
  };
  canLoginWithGoogle?: boolean;
  children: React.ReactNode;
}

const FormWrapper = ({
  className,
  handleSubmit,
  onOptionClick,
  submitText,
  title,
  description,
  options,
  canLoginWithGoogle,
  children,
}: Props) => {
  return (
    <form
      className={`w-full bg-white p-8 flex flex-col items-center rounded-lg shadow-lg ${className}`}
      onSubmit={handleSubmit}
    >
      <h1 className="py-3 text-[22px] text-[#282828] font-bold">{title}</h1>
      <p className="text-[12px] text-[#777777] text-center leading-relaxed">
        {description}
      </p>
      <div className="flex flex-col w-full gap-3 mt-2">
        {children}

        <button className="w-full text-[#fdfdfd] bg-[#47aa76] rounded-[3px] py-3 mt-2.5 hover:bg-[#3d9667] transition">
          {submitText}
        </button>
        {options && (
          <div className="text-xs flex gap-2">
            <p className="text-[#777]">حسابی ندارید؟</p>
            <p
              className="text-[#47aa76] hover:underline cursor-pointer"
              onClick={onOptionClick}
            >
              حساب بسازید
            </p>
          </div>
        )}
      </div>
      {canLoginWithGoogle && (
        <>
          <div className="border-b border-[#ccc] relative w-[calc(100%-5%)] my-6">
            <p className="px-2 absolute bg-white bottom-1/2 translate-y-1/2 text-[#555555] text-xs translate-x-1/2 right-1/2">
              یا
            </p>
          </div>
          <div className="w-full">
            <GoogleButton />
          </div>
        </>
      )}
    </form>
  );
};

export default FormWrapper;
