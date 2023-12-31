import FormWrapper from "@/Components/common/FormWrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import InputWrapper from "@/Components/common/InputWrapper";
import { schema } from "@/utils/Schemas/SignupSchema";
import userApi from "@/utils/Services/user.api";
import authApi from "@/utils/Services/auth.api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

// type formData = z.infer<typeof schema>;
interface Props {
  className?: string;
  onLoginClick: () => void;
  isSignUp: boolean;
}

interface IFormInput {
  signup_name: string;
  signup_username: string;
  signup_email: string;
  signup_password: string;
  signup_confirmPassword: string;
}

const SignUpForm = ({ className, onLoginClick, isSignUp }: Props) => {

  const handleSignUp = async (data: IFormInput) => {
    if (!isSignUp) return;
    try {
      const res = await userApi.registerUser(data);
      authApi.loginWithJwt(res.headers["x-auth-token"]);
      window.location.href = "/feed";
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 400) {
        toast(e.response.data?.message, {
          type: "error",
        });
      }
      else {
        toast("خطایی رخ داده است", {
          type: "error",
        });
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) =>
    handleSignUp(data);

  const inputClass =
    "w-full outline-none border border-[#dddddd] bg-[#f6f6f6] py-3 px-3 rounded-[3px] text-sm focus:border-[#47aa76] duration-300";

  return (
    <FormWrapper
      className={className}
      handleSubmit={handleSubmit(onSubmit)}
      onOptionClick={onLoginClick}
      submitText="ثبت نام"
      title="ثبت نام"
      description="برای ثبت نام اطلاعات خود را در فیلد های زیر وارد کنید"
      options={{
        text: "حساب دارید؟",
        linkText: "وارد شوید",
        onClick: onLoginClick,
      }}
    >
      <div className="w-full flex flex-row gap-3">
        <InputWrapper error={errors.signup_name} id="name" text="نام">
          <input
            id="signup_name"
            className={inputClass}
            placeholder={"نام شما"}
            dir="rtl"
            {...register("signup_name")}
          />
        </InputWrapper>
        <InputWrapper
          error={errors.signup_username}
          id="login_username"
          text="نام کاربری"
        >
          <input
            id="signup_username"
            className={inputClass}
            placeholder={"Username"}
            dir="ltr"
            {...register("signup_username")}
          />
        </InputWrapper>
      </div>
      <InputWrapper error={errors.signup_email} id="signup_email" text="ایمیل">
        <input
          id="signup_email"
          type="email"
          className={inputClass}
          placeholder={"Example@email.com"}
          dir="ltr"
          {...register("signup_email")}
        />
      </InputWrapper>
      <div className="w-full flex flex-row gap-3">
        <InputWrapper
          error={errors.signup_password}
          id="signup_password"
          text="رمز عبور"
        >
          <input
            id="signup_password"
            type="password"
            className={inputClass}
            placeholder={"رمز عبور"}
            dir="rtl"
            {...register("signup_password")}
          />
        </InputWrapper>
        <InputWrapper
          error={errors.signup_confirmPassword}
          id="signup_confirmPassword"
          text="تکرار رمز عبور"
        >
          <input
            id="signup_confirmPassword"
            type="password"
            className={inputClass}
            placeholder={"رمز عبور"}
            dir="rtl"
            {...register("signup_confirmPassword")}
          />
        </InputWrapper>
      </div>
    </FormWrapper>
  );
};

export default SignUpForm;
