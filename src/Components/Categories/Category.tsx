import SectionLayout from "../common/SectionLayout";

const Category = () => {
    return (
        <SectionLayout className="p-0 w-[230px] hover:scale-[1.03] transition cursor-pointer rounded-lg">
          <div className="max-h-[60px] w-full overflow-hidden">
            <img
              src="https://www.iimtindia.net/Blog/wp-content/uploads/2021/05/Machine-Learning.jpg"
              alt="category"
              className="rounded-t-lg"
            />
          </div>
          <div className="px-4 pb-6">
            <h4 className="text-[17px] text-[#222] font-bold text-center pt-2 pb-1">
              رایانه
            </h4>
            <p className="text-[11px] text-[#777]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،{" "}
            </p>
          </div>
        </SectionLayout>
    );
};

export default Category;