import AnswerTypes from "@/types/AnswerTypes";
import SectionLayout from "../common/SectionLayout";
import AnswerActions from "./AnswerActions";
import UserProfile from "./UserProfile";

interface Props {
  data: AnswerTypes;
  answersCount: number;
  currentAnswer: number;
}

const AnswerCard = ({ data, answersCount, currentAnswer }: Props) => {
  const { profile, username } = data.user;

  // const [isOpen, setOpen] = useState<boolean>(false);

  // const words = data.body.split(" ");

  return (
    <SectionLayout className="flex flex-col gap-4 px-8 py-7">
      <div className="flex gap-2 items-center justify-between">
        <UserProfile
          name={profile.name}
          job={profile.job}
          avatar={profile.profile_picture}
          username={username}
        />
        <div>
          <p className="text-[#7d7d7d] text-[10px]">۵ سال پیش</p>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-[14px] text-[#3f3f3f] leading-loose">'{data.body}</p>
      </div>

      <AnswerActions
        answersCount={answersCount}
        currentAnswer={currentAnswer}
        upvotes={data.upvotes}
      />
    </SectionLayout>
  );
};

export default AnswerCard;
