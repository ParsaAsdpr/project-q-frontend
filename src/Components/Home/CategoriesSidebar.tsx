import { MdOutlineCategory } from "react-icons/md";
import SectionLayout from "../common/SectionLayout";
import { BiEdit } from "react-icons/bi";

const CategoriesSidebar = () => {
  const categories = ["رایانه", "علمی", "فناوری", "فرهنگی", "ورزشی"];
  const activeCat = "رایانه";
  return (
    <SectionLayout className="flex flex-col px-6 gap-5">
      <div className="flex my-2 items-center text-[#464646] justify-between">
        <div className="flex items-center gap-1">
          <MdOutlineCategory className="text-base" />
          <h3 className="text-[16px] ">دسته بندی ها</h3>
        </div>
        <BiEdit />
      </div>
      {categories.map((category) => (
        <div className={`flex relative cursor-pointer`}>
          <p className="text-[14px] w-[190px] text-[#6e6e6e]">{category}</p>
          {category === activeCat && (
            <>
              <span className="h-10 w-1 bg-[#59dc98] absolute -right-6 top-1/2 -translate-y-1/2 rounded-l"></span>
              <span className="absolute w-full h-full bg-[#59dc981d] scale-x-125 scale-y-[1.94]"></span>
            </>
          )}
        </div>
      ))}
      <button className="text-[#6e6e6e] text-lg inline-flex mx-auto px-1.5 -mt-2">...</button>
    </SectionLayout>
  );
};

export default CategoriesSidebar;
