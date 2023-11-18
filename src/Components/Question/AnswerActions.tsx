import { NavLink } from "react-router-dom";
import UpvoteButton from "../common/UpvoteButton";
import { toArabic } from "arabic-digits";

interface Props{
    answersCount: number;
    upvotes: number;
}

const AnswerActions = ({answersCount, upvotes}: Props) => {
    return (
        <div className="flex text-[11px] text-[#878787] justify-between items-center">
          <div className="flex gap-3">
            <UpvoteButton upvotes={upvotes} />
          </div>
          <NavLink className="hover:underline mt-2" to="/">
            جواب {toArabic(answersCount)} از {toArabic(answersCount)}
          </NavLink>
        </div>

    );
};

export default AnswerActions;