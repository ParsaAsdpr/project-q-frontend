import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
    return (
        <div className="flex bg-[#59dc982f] rounded-[4px] items-center p-1.5 lg:p-2.5">
            <BiSearch className="text-[#3c9065] text-lg" />
            <input className="outline-none border-0 bg-transparent pr-2 text-[12px] w-[250px] lg:w-[330px]" type="text" placeholder="دوست داری چی بدونی؟" dir="rtl" />
        </div>
    );
};

export default SearchInput;