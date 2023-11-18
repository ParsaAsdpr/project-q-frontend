import Navbar from "../Components/Header/Navbar/Navbar";
import NotificationsModal from "../Components/Header/NotificationsModal";
import ProfileMenu from "../Components/Header/ProfileMenu";
import SearchInput from "../Components/Header/SearchInput";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isLoggedIn = false;

  return (
    <header className="flex flex-col w-full items-center bg-white">
      {/* TOP HEADER */}
      <div className="w-full border-b border-b-black border-opacity-10">
        <div className="w-full flex max-w-7xl justify-between mx-auto items-center px-3 relative">
          {/* RIGHT SIDE */}
          <div className="flex items-center">
            {/* LOGO */}
            <div className="pb-2 h-[66px] w-28 md:static md:translate-x-0 absolute right-1/2 translate-x-1/2">
              <div className="h-full bg-[#59dc98] rounded-b-lg"></div>
            </div>
            <div className="py-2 lg:py-3.5 flex items-center">
              <div className="mr-5">
                <Navbar />
              </div>
              <div className="mr-2">
                <SearchInput />
              </div>
            </div>
          </div>
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <NotificationsModal />
            {isLoggedIn ? (
              <ProfileMenu
                name="محمد محمدی"
                avatar="https://i.pravatar.cc/300"
              />
            ) : (
              <NavLink to="/login" className="text-center text-xs text-[#47b97d] hover:text-[#ffffff] border-[2.9px] border-[#47b97d] hover:bg-[#47b97d] px-3.5 py-2.5 rounded-full font-bold transition">
                ورود / ثبت نام
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
