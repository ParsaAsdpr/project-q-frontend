import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import ChangeAvatarModal from "./ChangeAvatarModal";
import { apiUrl } from "@/config.json";
import { useParams } from "react-router";

interface Props {
  imageUrl: string;
  currentUsername: string;
}

const ProfilePicture = ({ imageUrl, currentUsername }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const { username } = useParams();

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div className="rounded-full overflow-hidden w-28 h-28 relative">
      {currentUsername === username && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black items-center justify-center bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100 cursor-pointer duration-200 flex flex-col"
          onClick={() => setShowModal(true)}
        >
          <BiEdit className="text-white text-lg" />
          <p className="text-white">تغییر</p>
        </div>
      )}
      <img
        src={`${apiUrl}${imageUrl}`}
        alt="profile"
        className="w-full h-full object-cover"
      />
      {showModal && <ChangeAvatarModal onClick={handleModalClose} />}
    </div>
  );
};

export default ProfilePicture;
