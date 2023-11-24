import Layout from "@/Layout";

const NotFound = () => {
  return (
    <Layout title="خطای 404">
      <div className="flex flex-col w-full justify-center items-center mt-[10vh]">
        <img src="/404.png" alt="not found" className="w-1/2" />
        <h1 className="text-3xl font-bold text-[#444]">
          صفحه مورد نظر یافت نشد
        </h1>
      </div>
    </Layout>
  );
};

export default NotFound;
