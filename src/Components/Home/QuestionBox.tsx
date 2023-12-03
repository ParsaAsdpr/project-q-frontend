import { useContext, useState } from "react";
import SectionLayout from "../common/SectionLayout";
import { UserContext } from "@/utils/Contexts/UserContext";
import { apiUrl } from "@/config.json";
import QuestionFormModal from "../Question/QuestionFormModal";
// import { useForm } from "react-hook-form";

// type FormData = {
//   question_title: string;
// };

const QuestionBox = () => {
  const { profile } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const {onSubmit} = useForm();

  return (
    <SectionLayout className="flex flex-col w-full p-4">
    <div className="flex gap-3 items-center w-full">
      <img
        src={`${apiUrl}${profile?.profile_picture ?? ""}`}
        alt="profile picture"
        className="rounded-full w-10 h-10"
      />
      <form className="w-full flex gap-2">
        <div
          className="border-0 px-4 bg-[#00000008] py-3 text-sm rounded-md w-full cursor-pointer flex-grow duration-300 text-[#969696]"
          onClick={() => setIsModalOpen(true)}
        >چه سوالی تو ذهنت داری؟</div>
      </form>
      { isModalOpen && <QuestionFormModal onModalClose={() => setIsModalOpen(false)} />}
    </div>
    </SectionLayout>
  );
};

export default QuestionBox;
