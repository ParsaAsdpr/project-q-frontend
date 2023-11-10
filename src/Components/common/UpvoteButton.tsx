import useNumberFormatter from "@/Hooks/useNumberFormatter";
import { toArabic } from "arabic-digits";

interface Props {
  upvotes: number;
}

const UpvoteButton = ({ upvotes }: Props) => {
  const { formattedNumber } = useNumberFormatter(upvotes);

  return (
    <div className="rounded-full bg-[#59dc980e] hover:bg-[#59dc9829] transition border border-[#68dba09e] px-3 flex text-[12px] text-bold cursor-pointer">
      <p className="border-l border-[#68dba09e] font-bold pl-2 py-1.5 text-[#46af79]">پسند</p>
      <p className="pr-2 py-1.5 text-[#4a4a4a]">{toArabic(formattedNumber)}</p>
    </div>
  );
};

export default UpvoteButton;
