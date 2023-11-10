import TextInput from "../../common/TextInput";
import { useState } from "react";

interface Props {
  className?: string;
  onLoginClick: () => void;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  username: string;
  name: string;
}
const SignUpNameForm = ({ className, onLoginClick, onSubmit }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Call the onSubmit function passed via props
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
        پروفایلت را کامل کنید
      </h1>
      <p className="text-[12px] text-[#777777] text-center leading-relaxed">
        یک نام کاربری برای خود انتخاب کنید
      </p>
      <div className="flex flex-col w-full gap-3 mt-2">
        <TextInput
          placeholder="username"
          name="username"
          id="username"
          onChange={handleInputChange}
          value={formData.username}
          text="نام کاربری"
        />
        <TextInput
          placeholder="نام شما"
          name="name"
          id="name"
          onChange={handleInputChange}
          value={formData.name}
          text="نام "
        />
        <button className="w-full text-[#fdfdfd] bg-[#47aa76] rounded-[3px] py-3 mt-2.5 hover:bg-[#3d9667] transition">
          ساخت حساب
        </button>
        <div className="text-xs flex gap-2">
          <p className="text-[#777]">حسابی ندارید؟</p>
          <p
            className="text-[#47aa76] hover:underline cursor-pointer"
            onClick={onLoginClick}
          >
            حساب بسازید
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUpNameForm;
