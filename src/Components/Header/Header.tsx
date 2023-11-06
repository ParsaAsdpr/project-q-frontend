import Navbar from "./Navbar/Navbar";
import NotificationsModal from "./NotificationsModal";
import ProfileMenu from "./ProfileMenu";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="flex flex-col w-full items-center">
      {/* TOP HEADER */}
      <div className="w-full border-b border-b-black border-opacity-10">
        <div className="w-full flex max-w-7xl justify-between mx-auto items-center">
          {/* RIGHT SIDE */}
          <div className="flex items-center">
            {/* LOGO */}
            <div className="pb-2 h-14 w-28">
              <div className="h-full bg-[#59dc98] rounded-b-lg"></div>
            </div>
            <div className="mr-5">
              <Navbar />
            </div>
            <div className="mr-2">
              <SearchInput />
            </div>
          </div>
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <NotificationsModal />
            <ProfileMenu name="محمد محمدی" avatar="https://i.pravatar.cc/300" />
          </div>
        </div>
      </div>

      {/* BOTTOM HEADER */}
      <div className="w-full"></div>
    </div>
  );
};

export default Header;
