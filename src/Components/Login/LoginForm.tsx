import TextInput from "@/Components/common/TextInput";
import GoogleButton from "./GoogleButton";

interface Props {
  onSignUpClick: () => void;
  className?: string;
}

const LoginForm = ({ onSignUpClick, className }: Props) => {
  return (
    <form className={`w-full bg-white p-8 flex flex-col items-center rounded-lg shadow-lg ${className}`}>
      <h1 className="py-3 text-[22px] text-[#282828] font-bold">
        ورود به حساب
      </h1>
      <p className="text-[12px] text-[#777777] text-center leading-relaxed">
        با ورود به حساب خود می توانید سوال های خود را مطرح کنید و به دیگران کمک
        کنید
      </p>
      <div className="flex flex-col w-full gap-3 mt-2">
        <TextInput
          placeholder="example@email.com"
          type="email"
          name="email"
          id="email"
          onChange={() => {}}
          value=""
          text="ایمیل"
        />
        <TextInput
          placeholder="رمز عبور خود را وارد کنید"
          name="password"
          id="password"
          onChange={() => {}}
          value=""
          text="رمز عبور"
        />
        <button className="w-full text-[#fdfdfd] bg-[#47aa76] rounded-[3px] py-3 mt-2.5 hover:bg-[#3d9667] transition">
          ورود به حساب
        </button>
        <div className="text-xs flex gap-2">
          <p className="text-[#777]">حسابی ندارید؟</p>
          <p
            className="text-[#47aa76] hover:underline cursor-pointer"
            onClick={onSignUpClick}
          >
            حساب بسازید
          </p>
        </div>
      </div>
      <div className="border-b border-[#ccc] relative w-[calc(100%-5%)] my-6">
        <p className="px-2 absolute bg-white bottom-1/2 translate-y-1/2 text-[#555555] text-xs translate-x-1/2 right-1/2">
          یا
        </p>
      </div>
      <div className="w-full">
        <GoogleButton />
      </div>
    </form>
  );
};

export default LoginForm;
