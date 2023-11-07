import SectionLayout from "../common/SectionLayout";

interface Props {
  avatar: string;
}

const QuestionSection = ({ avatar }: Props) => {
  return (
    <SectionLayout className="flex flex-col w-full">
      <div className="flex gap-3 items-center w-full">
        <img
          src={avatar}
          alt="profile picture"
          className="rounded-full w-10 h-10"
        />
        <input
          type="text"
          placeholder="چه سوالی تو ذهنت داری؟"
          className="outline-none border-0 px-4 bg-[#00000006] py-3 text-sm rounded-md w-full"
        />
      </div>
    </SectionLayout>
  );
};

export default QuestionSection;
