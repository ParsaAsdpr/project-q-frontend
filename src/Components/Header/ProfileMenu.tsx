import { useState } from "react";
import SectionLayout from "../common/SectionLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed w-full h-screen top-0 left-0 bg-black/30 z-10"
          ></motion.div>
          <SectionLayout className="p-0 absolute z-50 top-[calc(100%+4px)] flex flex-col w-full text-center py-1">
            <Link
              to="/profile"
              className="text-[#333] text-sm w-full hover:bg-black/5 py-1.5"
            >
              پروفایل
            </Link>
            <Link
              to="/logout"
              className="text-red-500 text-sm w-full hover:bg-black/5 py-1.5"
            >
              خروج
            </Link>
          </SectionLayout>
        </>
      )}
    </div>
  );
};

export default ProfileMenu;
