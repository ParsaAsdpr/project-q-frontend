import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import ChangeAvatarModal from "./ChangeAvatarModal";

const ProfilePicture = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div className="rounded-full overflow-hidden w-28 h-28 relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black items-center justify-center bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100 cursor-pointer duration-200 flex flex-col"
        onClick={() => setShowModal(true)}
      >
        <BiEdit className="text-white text-lg" />
        <p className="text-white">تغییر</p>
      </div>
      <img
        src="https://i.pravatar.cc/300"
        alt="profile"
        className="w-full h-full object-cover"
        />
        {showModal && <ChangeAvatarModal onClick={handleModalClose} />}
    </div>
  );
};

export default ProfilePicture;
