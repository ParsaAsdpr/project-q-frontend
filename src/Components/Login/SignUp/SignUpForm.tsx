import TextInput from "../../common/TextInput";
import { useState } from "react";

interface Props {
  className?: string;
  onLoginClick: () => void;
  onSubmit: (data: FormData) => void;
}
interface FormData {
  email: string;
  password: string;
  repeatPassword: string;
}
const SignUpForm = ({ className, onLoginClick, onSubmit }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <form
      className={`w-full bg-white p-8 flex flex-col items-center rounded-lg shadow-lg ${className}`}
      onSubmit={handleSubmit}
    >
      <h1 className="py-3 text-[22px] text-[#282828] font-bold">
        ایجاد حساب کاربری
      </h1>
      <p className="text-[12px] text-[#777777] text-center leading-relaxed">
        برای فعالیت در سایت باید حساب ایجاد کنید
      </p>
      <div className="flex flex-col w-full gap-3 mt-2">
        <TextInput
          placeholder="example@email.com"
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={formData.email}
          text="ایمیل"
        />
        <TextInput
          placeholder="رمز عبور خود را وارد کنید"
          name="password"
          id="password"
          onChange={handleInputChange}
          value={formData.password}
          text="رمز عبور"
        />
        <TextInput
          placeholder="رمز عبور خود را وارد کنید"
          name="repeatPassword"
          id="repeatPassword"
          onChange={handleInputChange}
          value={formData.repeatPassword}
          text="تکرار رمز عبور"
        />
        <button className="w-full text-[#fdfdfd] bg-[#47aa76] rounded-[3px] py-3 mt-2.5 hover:bg-[#3d9667] transition">
          مرحله بعد
        </button>
        <div className="text-xs flex gap-2">
          <p className="text-[#777]">ثبت نام کردید؟</p>
          <p
            className="text-[#47aa76] hover:underline cursor-pointer"
            onClick={onLoginClick}
          >
            وارد شوید
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
