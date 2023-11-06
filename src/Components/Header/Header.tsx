import React from "react";
import Navbar from "./Navbar/Navbar";
import NotificationsModal from "./NotificationsModal";
import ProfileMenu from "./ProfileMenu";
import SearchInput from "./SearchInput";
import HeaderTab from "./HeaderTab";

const Header = () => {
  const [activeTab, setActiveTab] = React.useState<string>("برای شما");
  const tabs = ["برای شما", "پاسخ ها"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col w-full items-center">
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
            <ProfileMenu name="محمد محمدی" avatar="https://i.pravatar.cc/300" />
          </div>
        </div>
      </div>

      {/* BOTTOM HEADER */}
      <div className="w-full border-b border-b-black border-opacity-10 py-2 md:py-2.5 flex justify-center items-center">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <HeaderTab
              key={tab}
              activeTab={activeTab}
              text={tab}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
