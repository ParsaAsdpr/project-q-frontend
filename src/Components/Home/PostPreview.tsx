import SectionLayout from "../common/SectionLayout";
import { useState } from "react";
import UpvoteButton from "../common/UpvoteButton";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  bio: string;
  avatar: string;
  title: string;
  answer: string;
}

const PostPreview = ({ name, bio, avatar, title, answer }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const words = answer.split(" ");

  return (
    <SectionLayout className="flex flex-col gap-4 px-8 py-5">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={avatar}
            alt="profile picture"
            className="rounded-full w-10 h-10 overflow-hidden"
          />
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-2 items-center">
              <h4 className="text-[16px] text-[#333333] ">{name}</h4>
              <button className="text-[#59dc98] text-[11px] cursor-pointer border border-[#59dc98] rounded-sm px-1 hover:bg-[#59dc98] hover:text-white transition">
                دنبال کردن
              </button>
            </div>
            <p className="text-[#7d7d7d] text-[10px]">{bio}</p>
          </div>
        </div>
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#7d7d7d] text-[10px]">۵ سال پیش</p>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-[#222222] text-[17px] font-bold">{title}</h2>
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
