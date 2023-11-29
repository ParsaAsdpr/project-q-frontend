import { NavLink } from "react-router-dom";
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
          <NavLink className="hover:underline mt-2" to="/">
            جواب {toArabic(currentAnswer)} از {toArabic(answersCount)}
          </NavLink>
        </div>

    );
};

export default AnswerActions;