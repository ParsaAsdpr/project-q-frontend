import SectionLayout from "../common/SectionLayout";
import { useState } from "react";
import UserProfile from "../Question/UserProfile";
import AnswerTypes from "@/types/AnswerTypes";
import AnswerActions from "../Question/AnswerActions";
import { Link } from "react-router-dom";

interface Props {
  data: AnswerTypes;
}

const PostPreview = ({ data }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const words = data.body.split(" ");

  return (
    <SectionLayout className="flex flex-col gap-4 px-8 py-5">
      <div className="flex gap-2 items-center justify-between">
        <UserProfile
          name={data.user.profile.name}
          job={data.user.profile.job}
          avatar={data.user.profile.profile_picture}
          username={data.user.username}
        />
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#7d7d7d] text-[10px]">۵ سال پیش</p>
        </div>
      </div>

      <div className="flex flex-col">
        <Link
          className="text-[#444] text-[17px] font-bold hover:underline"
          to={`/questions/${data.question._id}`}
          target="_blank"
        >
          {data.question.title}
        </Link>
        {!isOpen && words.length > 60 ? (
          <p className="text-[14px] text-[#3f3f3f] leading-loose mt-2">
            {words.slice(0, 60).join(" ")}{" "}
            <button
              className="text-[#47d589] hover:underline font-bold"
              onClick={() => setOpen(true)}
            >
              بیشتر...
            </button>
          </p>
        ) : (
          <p className="text-[14px] text-[#3f3f3f] leading-loose mt-2">
            {data.body}
          </p>
        )}
      </div>

      <AnswerActions answersCount={43} upvotes={1400} />

      <div className="flex justify-between items-center">
        <div className="flex gap-2"></div>
        <div></div>
      </div>
    </SectionLayout>
  );
};

export default PostPreview;
