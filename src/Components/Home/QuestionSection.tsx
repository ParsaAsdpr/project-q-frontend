import { useContext } from "react";
import SectionLayout from "../common/SectionLayout";
import { UserContext } from "@/utils/Contexts/UserContext";
import {apiUrl} from '@/config.json'

const QuestionSection = () => {
  const {profile} = useContext(UserContext);
  return (
    <SectionLayout className="flex flex-col w-full p-4">
      <div className="flex gap-3 items-center w-full">
        <img
          src={`${apiUrl}${profile?.profile_picture ?? ''}`}
          alt="profile picture"
          className="rounded-full w-10 h-10"
        />
        <input
          type="text"
          placeholder="چه سوالی تو ذهنت داری؟"
          className="outline-none border-0 px-4 bg-[#00000006] py-3 text-sm rounded-md w-full"
        />
      </div>
    </SectionLayout>
  );
};

export default QuestionSection;
