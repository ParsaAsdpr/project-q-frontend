import FormWrapper from "../common/FormWrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import InputWrapper from "../common/InputWrapper";
import { schema } from "@/utils/Schemas/LoginSchema";
import authApi from "@/utils/Services/auth.api";
import { AxiosError } from "axios";

interface Props {
  onSignUpClick: () => void;
  className?: string;
  isSignUp: boolean;
}

interface IFormInput {
  login_email: string;
  login_password: string;
}

const LoginForm = ({ onSignUpClick, className, isSignUp }: Props) => {

  const handleLogin = async (data: IFormInput) => {
    if (isSignUp) return;
    try {
      await authApi.login(data);
      window.location.href = "/feed"
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 400) {
        alert(e.response.data?.message);
        console.log(e.response.data?.message);
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) =>
    handleLogin(data);

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
