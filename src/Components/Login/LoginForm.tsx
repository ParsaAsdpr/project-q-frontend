import FormWrapper from "../common/FormWrapper";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import InputWrapper from "../common/InputWrapper";
import { schema } from "@/utils/Schemas/LoginSchema";

interface Props {
  onSignUpClick: () => void;
  className?: string;
}

interface IFormInput {
  login_email: string;
  login_password: string;
}

const LoginForm = ({ onSignUpClick, className }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<IFormInput> = (data: FieldValues) =>
    console.log(data);

  const inputClass =
    "w-full outline-none border border-[#dddddd] bg-[#f6f6f6] py-3 px-3 rounded-[3px] text-sm focus:border-[#47aa76] duration-300";

  return (
    <FormWrapper
      className={className}
      handleSubmit={handleSubmit(onSubmit)}
      onOptionClick={onSignUpClick}
      submitText="ورود"
      title="ورود به حساب"
      description="برای ورود اطلاعات خود را در فیلد های زیر وارد کنید"
      canLoginWithGoogle
      options={{
        text: "حسابی ندارید؟",
        linkText: "ثبت نام کنید",
        onClick: onSignUpClick,
      }}
    >
      <InputWrapper error={errors.login_email} id="login_email" text="ایمیل">
        <input
          id="login_email"
          type="email"
          className={inputClass}
          placeholder={"Example@email.com"}
          dir="ltr"
          {...register("login_email")}
        />
      </InputWrapper>
      <InputWrapper
        error={errors.login_password}
        id="login_password"
        text="رمز عبور"
      >
        <input
          id="login_password"
          type="password"
          className={inputClass}
          placeholder={"رمز عبور"}
          dir="rtl"
          {...register("login_password")}
        />
      </InputWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
