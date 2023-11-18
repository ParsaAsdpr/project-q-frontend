import ProfileCard from "@/Components/Profile/ProfileCard";
import SectionLayout from "@/Components/common/SectionLayout";
import Layout from "@/Layout";

const Profile = () => {
  return (
    <Layout title="پروفایل">
      <SectionLayout className="p-5 px-6 flex flex-col rounded-lg">
        <h1 className="text-[24px] font-bold text-[#222] px-3 pt-2">اطلاعات حساب</h1>
        <ProfileCard />
      </SectionLayout>
    </Layout>
  );
};

export default Profile;
