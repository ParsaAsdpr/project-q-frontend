import ProfileCard from "@/Components/Profile/ProfileCard";
import SectionLayout from "@/Components/common/SectionLayout";
import Layout from "@/Layout";
import { useState } from "react";

const Profile = () => {
  const tabs = ["سوال ها", "جواب ها", "پست ها", "فعالیت ها"];
  const [activeTab, setActiveTab] = useState("سوال ها");
  return (
    <Layout title="پروفایل">
      <SectionLayout className="p-5 px-6 flex flex-col rounded-lg">
        <h1 className="text-[24px] font-bold text-[#222] px-3 pt-2">
          اطلاعات حساب
        </h1>
        <ProfileCard />

        <div className="grid grid-cols-3 gap-3">
          <div className="flex gap-3 mt-5 mx-2 border-b border-b-[#f5f5f5] col-span-2">
            {tabs.map((tab) => (
              <a
                className={`px-1.5 py-2 hover:bg-[#fafafa] cursor-pointer relative rounded-t-md ${
                  activeTab === tab ? "text-[#59dc98]" : "text-[#777]"
                }`}
                key={tab}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setActiveTab(tab);
                }}
              >
                {activeTab === tab ? (
                  <span className="absolute w-full h-[3px] bg-[#59dc98] bottom-0 right-0 rounded-t-full"></span>
                ) : null}
                {tab}
              </a>
            ))}
          </div>

          <div className=""></div>
        </div>
      </SectionLayout>
    </Layout>
  );
};

export default Profile;
