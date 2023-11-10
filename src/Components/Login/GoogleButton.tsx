import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <button className="flex px-6 py-3 text-[#444444] items-center justify-center gap-4 border border-[#ccc] hover:bg-[#f8f8f8] transition rounded-[3px] w-full">
      <p className="text-lg">
        <FcGoogle />
      </p>
      <p>ورود با گوگل</p>
    </button>
  );
};

export default GoogleButton;
