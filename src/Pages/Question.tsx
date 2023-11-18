import SectionLayout from "@/Components/common/SectionLayout";
import AnswerActions from "@/Components/Question/AnswerActions";
import UserProfile from "@/Components/Question/UserProfile";
import Layout from "@/Layout";
import { getQuestion } from "@/utils/Services/questions.api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface QuestionInterface {
  _id: string;
  user_id: string;
  title: string;
  body: string;
  timestamp: string;
  tags: string[];
  __v: number;
}

const Question = () => {
  const [question, setQuestion] = useState<QuestionInterface>();
  const { id } = useParams();

  useEffect(() => {
    const getData = async (id: string | undefined) => {
      if (id) {
        const data = await getQuestion(id);
        setQuestion(data.data);
      }
    };

    getData(id);
  }, [id, setQuestion]);

  useEffect(() => {
    console.log(question);
  }, [question]);
  return (
    <Layout title={"Question.title"} className="max-w-4xl flex flex-col gap-3">
      <SectionLayout className="px-8 py-4">
        <h1 className="text-[19px] font-bold text-[#444]">{question?.title}</h1>
      </SectionLayout>

      <SectionLayout className="flex flex-col gap-4 px-8 py-7">
        <div className="flex gap-2 items-center justify-between">
          <UserProfile
            name={"پارسا"}
            bio={"لورم ایپسوم متن ساختگی با تولید سادگی"}
            avatar={"https://i.pravatar.cc/300"}
          />
          <div>
            <p className="text-[#7d7d7d] text-[10px]">۵ سال پیش</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-[14px] text-[#3f3f3f] leading-loose">
            {question?.body}
          </p>
        </div>

        <AnswerActions answersCount={43} upvotes={1400} />
      </SectionLayout>
    </Layout>
  );
};

export default Question;
