import { MdOutlineCategory } from "react-icons/md";
import SectionLayout from "../common/SectionLayout";
import { BiEdit } from "react-icons/bi";

interface Props{
  categories: string[];
  className?: string;
  activeCategory: string;
}

const CategoriesSidebar = ({className, categories, activeCategory}: Props) => {
  return (
    <SectionLayout className={`${className} flex flex-col px-6 gap-5 self-start`}>
      <div className="flex my-1.5 items-center text-[#464646] justify-between">
        <div className="flex items-center gap-1">
          <MdOutlineCategory className="text-base" />
          <h3 className="text-[16px] ">دسته بندی ها</h3>
        </div>
        <BiEdit />
      </div>
      {categories.map((category) => (
        <div className={`flex relative cursor-pointer`} key={category}>
          <p className={`text-[14px] w-[190px] ${category === activeCategory ? "text-[#47aa76] font-bold" : "text-[#6e6e6e]"}`}>{category}</p>
          {category === activeCategory && (
            <>
              <span className="h-10 w-1 bg-[#59dc98] absolute -right-6 top-1/2 -translate-y-1/2 rounded-l"></span>
              <span className="absolute w-full h-full bg-[#59dc981d] scale-x-[1.31] scale-y-[1.94]"></span>
            </>
          )}
        </div>
      ))}
      <button className="text-[#6e6e6e] text-lg inline-flex mx-auto px-1.5 -mt-2">...</button>
    </SectionLayout>
  );
};

export default CategoriesSidebar;
