import FormWrapper from "@/Components/common/FormWrapper";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import InputWrapper from "@/Components/common/InputWrapper";

const schema = z
  .object({
    name: z.string().min(2, { message: "نام شما حداقل باید ۲ کاراکتر باشد" }),
    username: z
      .string()
      .min(3, { message: "نام کاربری شما حداقل باید ۳ کاراکتر باشد" })
      .refine(
        (value) => /^[a-zA-Z0-9_.]+$/.test(value),
        "نام کاربری معتبر نیست"
      ),
    email: z
      .string()
      .min(7, { message: "ایمیل حداقل باید ۷ کاراکتر باشد" })
      .email({ message: "ایمیل نامعتبر است" }),
    password: z
      .string()
      .min(8, { message: "رمز عبور حداقل باید ۸ کاراکتر باشد" }),
    confirmPassword: z
      .string()
      .min(8, { message: "رمز عبور حداقل باید ۸ کاراکتر باشد" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور باید یکی باشد",
    path: ["confirmPassword"],
  });
// type formData = z.infer<typeof schema>;
interface Props {
  className?: string;
  onLoginClick: () => void;
}

interface IFormInput {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = ({ className, onLoginClick }: Props) => {
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
        <InputWrapper error={errors.name} id="name" text="نام">
          <input
            id="name"
            className={inputClass}
            placeholder={"نام شما"}
            dir="rtl"
            {...register("name")}
          />
        </InputWrapper>
        <InputWrapper error={errors.username} id="username" text="نام کاربری">
          <input
            id="username"
            className={inputClass}
            placeholder={"Username"}
            dir="rtl"
            {...register("username")}
          />
        </InputWrapper>
      </div>
      <InputWrapper error={errors.email} id="email" text="ایمیل">
        <input
          id="email"
          type="email"
          className={inputClass}
          placeholder={"Example@email.com"}
          dir="rtl"
          {...register("email")}
        />
      </InputWrapper>
      <div className="w-full flex flex-row gap-3">
        <InputWrapper error={errors.password} id="password" text="رمز عبور">
          <input
            id="password"
            type="password"
            className={inputClass}
            placeholder={"رمز عبور"}
            dir="rtl"
            {...register("password")}
          />
        </InputWrapper>
        <InputWrapper
          error={errors.confirmPassword}
          id="confirmPassword"
          text="تکرار رمز عبور"
        >
          <input
            id="confirmPassword"
            type="password"
            className={inputClass}
            placeholder={"رمز عبور"}
            dir="rtl"
            {...register("confirmPassword")}
          />
        </InputWrapper>
      </div>
    </FormWrapper>
  );
};

export default SignUpForm;
