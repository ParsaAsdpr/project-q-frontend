import ProfileCard from "@/Components/Profile/ProfileCard";
import SectionLayout from "@/Components/common/SectionLayout";
import Layout from "@/Layout";
import { UserTypes } from "@/types/UserTypes";
import userApi from "@/utils/Services/user.api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {toast} from "react-toastify";
import {AxiosError} from "axios";

const Profile = () => {
  const { username = "" } = useParams();
  const tabs = ["سوال ها", "جواب ها", "پست ها", "فعالیت ها"];
  const [activeTab, setActiveTab] = useState("سوال ها");
  const [user, setUser] = useState<UserTypes>({} as UserTypes);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await userApi.getUser(username);
        setUser(data);
      } catch (e) {
        if(e instanceof AxiosError && e.response?.status === 404) window.location.href = "/404";
        else toast
      }
    }
    fetchUser();
  }, [username]);

  return (
    <Layout title="پروفایل">
      <SectionLayout className="p-5 px-6 flex flex-col rounded-lg">
        <h1 className="text-[24px] font-bold text-[#222] px-3 pt-2">
          اطلاعات حساب
        </h1>
        <ProfileCard user={user as UserTypes} />

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
