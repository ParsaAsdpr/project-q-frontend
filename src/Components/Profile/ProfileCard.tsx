import { BiEdit } from "react-icons/bi";
import ProfilePicture from "./ProfilePicture";
import { useContext } from "react";
import { UserContext } from "@/utils/Contexts/UserContext";

const ProfileCard = () => {
  const user = useContext(UserContext);

  return (
    <div className="grid grid-cols-2 mt-4 bg-[#f8f8f8] p-6 rounded-xl items-center">
      {/* LEFT SIDE */}
      <div className="flex gap-1.5 ">
        <ProfilePicture imageUrl={user.profile?.profile_picture ?? ''} />
        <div className="flex flex-col justify-center flex-grow">
          {/* USER INFO */}
          <div className="flex items-center justify-between pl-10">
            <div className="flex items-center">
              <h1 className="text-[18px] font-bold text-[#333] mx-2">
                {user.profile?.name}
              </h1>
              <p
                className="text-[#777] text-[13px] align-text-bottom"
                dir="ltr"
              >
                @{user.username}
              </p>
            </div>
            <a
              className="text-[#787878] hover:text-[#555] transition cursor-pointer text-lg"
              href="#"
            >
              <BiEdit />
            </a>
          </div>

          {/* USER STATS */}
          <p className="text-[#888] text-[14px] mx-2 py-0.5">{user.profile?.job ? user.profile?.job : "نامشخص"}</p>
          <div className="flex mt-2">
            <a className="text-[#44a573] hover:underline text-[14px] mx-2 cursor-pointer">
              ۲ دنبال کننده
            </a>
            <a className="text-[#44a573] hover:underline text-[14px] mx-2 cursor-pointer">
              ۵ دنبال شونده
            </a>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex flex-col pr-6 border-r border-r-black/10 h-full">
        <h3 className="text-[14px] font-bold text-[#222]">درباره من</h3>
        <p className="flex-grow text-[12px] text-[#666] leading-loose h-full">
          {user.profile?.bio ? user.profile?.bio : "توضیحاتی وجود ندارد"}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
