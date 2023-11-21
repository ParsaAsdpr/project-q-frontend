import { useState } from "react";
import SectionLayout from "../common/SectionLayout";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  avatar: string;
}

const ProfileMenu = ({ name, avatar }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="rounded-full border border-black border-opacity-10 p-0.5 flex items-center gap-2 cursor-pointer relative"
      onClick={() => setShowModal(!showModal)}
    >
      <img
        className="w-[33px] h-[33px] lg:w-[38px] lg:h-[38px] rounded-full"
        src={avatar}
        alt="profile picture"
      />
      <p className="text-sm pl-3 hidden lg:block">{name}</p>
      {showModal && (
        <>
        <div className="fixed w-full h-screen top-0 left-0 bg-black/5"></div>
        <SectionLayout className="p-3 absolute z-50 -bottom-full flex flex-col z-10">
          <Link to="/logout" className="text-red-500 text-sm" >خروج</Link>
        </SectionLayout>
        </>
      )}
    </div>
  );
};

export default ProfileMenu;
