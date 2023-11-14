import React from "react";
import { FieldError } from "react-hook-form";

interface Props {
  className?: string;
  id: string;
  error: FieldError | undefined;
  text: string;
  children: React.ReactNode;
}
const InputWrapper = ({ className, children, id, text, error }: Props) => {
  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-right px-2">
        {text}
      </label>
      {children}
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  );
};

export default InputWrapper;
