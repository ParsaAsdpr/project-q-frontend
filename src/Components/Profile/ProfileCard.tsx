import { BiEdit } from "react-icons/bi";
import ProfilePicture from "./ProfilePicture";

const ProfileCard = () => {
  return (
    <div className="grid grid-cols-2 mt-4 bg-[#f8f8f8] p-6 rounded-xl items-center">
      {/* LEFT SIDE */}
      <div className="flex gap-1.5 ">
        <ProfilePicture />
        <div className="flex flex-col justify-center flex-grow">
          {/* USER INFO */}
          <div className="flex items-center justify-between pl-10">
            <div className="flex items-center">
              <h1 className="text-[18px] font-bold text-[#333] mx-2">
                محمد محمدی
              </h1>
              <p
                className="text-[#777] text-[13px] align-text-bottom"
                dir="ltr"
              >
                @parsa
              </p>
            </div>
            <a className="text-[#787878] hover:text-[#555] transition cursor-pointer text-lg" href="#">
                <BiEdit />
            </a>
          </div>

          {/* USER STATS */}
          <p className="text-[#888] text-[14px] mx-2 py-0.5">برنامه نویس</p>
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
      <div className="flex flex-col pr-6 border-r border-r-black/10">
        <h3 className="text-[14px] font-bold text-[#222]">توضیحات</h3>
        <p className="flex-grow text-[12px] text-[#666] leading-loose">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد .
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
