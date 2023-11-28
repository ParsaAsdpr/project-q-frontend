import SectionLayout from "../common/SectionLayout";
import { useState } from "react";
import UpvoteButton from "../common/UpvoteButton";
import { NavLink } from "react-router-dom";
import UserProfile from "../Question/UserProfile";
import { ProfileTypes } from "@/types/UserTypes";

interface Props {
  user: {
    _id: string;
    username: string;
    profile: ProfileTypes;
  }
  title: string;
  answer: string;
}

const PostPreview = ({ user, title, answer }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const words = answer.split(" ");

  return (
    <SectionLayout className="flex flex-col gap-4 px-8 py-5">
      <div className="flex gap-2 items-center justify-between">
        <UserProfile name={user.profile.name} job={user.profile.job} avatar={user.profile.profile_picture} username={user.username} />
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#7d7d7d] text-[10px]">۵ سال پیش</p>
        </div>
      </div>

      <div className="flex flex-col">
        <a className="text-[#444] text-[17px] font-bold hover:underline" href="/questions/6543f89fa27ebb2a968e9efa">{title}</a>
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
            {answer}
          </p>
        )}
      </div>

      <div className="flex text-[11px] text-[#878787] justify-between items-center">
        <div className="flex gap-3">
          <UpvoteButton upvotes={1900} />
        </div>
        <NavLink className="hover:underline mt-2" to="/">
          جواب ۱ از ۲۰ جواب
        </NavLink>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2"></div>
        <div></div>
      </div>
    </SectionLayout>
  );
};

export default PostPreview;
