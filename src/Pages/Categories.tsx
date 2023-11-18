import Category from "@/Components/Categories/Category";
import Layout from "@/Layout";

const Categories = () => {
  return (
    <Layout title="دسته بندی ها">
      <h1 className="text-[#222] text-xl py-3 px-2 font-bold">برای شما</h1>
      <div className="flex gap-x-3 mt-2">
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </Layout>
  );
};

export default Categories;
