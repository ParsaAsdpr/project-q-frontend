import { BiEdit } from "react-icons/bi";

const ProfilePicture = () => {
  return (
    <div className="rounded-full overflow-hidden w-28 h-28 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black items-center justify-center bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100 cursor-pointer duration-200 flex flex-col">
        <BiEdit className="text-white text-lg" />
        <p className="text-white">ویرایش</p>
      </div>
      <img
        src="https://i.pravatar.cc/300"
        alt="profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfilePicture;
