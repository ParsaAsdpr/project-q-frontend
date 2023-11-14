import FormWrapper from "../common/FormWrapper";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import InputWrapper from "../common/InputWrapper";

const schema = z.object({
  email: z
    .string()
    .min(7, { message: "ایمیل حداقل باید ۸ کاراکتر باشد" })
    .email({ message: "ایمیل نامعتبر است" }),
  password: z.string().min(8, { message: "رمز عبور حداقل باید ۸ کاراکتر باشد" }),
});

interface Props {
  onSignUpClick: () => void;
  className?: string;
}

interface IFormInput {
  email: string;
  password: string;
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
      options={{text: "حسابی ندارید؟", linkText: "ثبت نام کنید", onClick: onSignUpClick}}
    >
      <InputWrapper error={errors.email} id="email" text="ایمیل">
        <input
          id="email"
          type="email"
          className={inputClass}
          placeholder={"Example@email.com"}
          dir="rtl"
          {...register("email", { required: true })}
        />
      </InputWrapper>
      <InputWrapper error={errors.password} id="password" text="رمز عبور">
        <input
          id="password"
          type="password"
          className={inputClass}
          placeholder={"رمز عبور"}
          dir="rtl"
          {...register("password", { required: true })}
        />
      </InputWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
