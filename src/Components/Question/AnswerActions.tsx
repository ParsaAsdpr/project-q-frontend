import UpvoteButton from "../common/UpvoteButton";
import { toArabic } from "arabic-digits";

interface Props{
    answersCount: number;
    upvotes: number;
    currentAnswer: number;
}

const AnswerActions = ({answersCount, upvotes, currentAnswer}: Props) => {
    return (
        <div className="flex text-[11px] text-[#878787] justify-between items-center">
          <div className="flex gap-3">
            <UpvoteButton upvotes={upvotes} />
          </div>
          <p className="hover:underline mt-2">
            جواب {toArabic(currentAnswer)} از {toArabic(answersCount)}
          </p>
        </div>

    );
};

export default AnswerActions;