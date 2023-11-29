import SectionLayout from "@/Components/common/SectionLayout";
import AnswerCard from "@/Components/Question/AnswerCard";
import Layout from "@/Layout";
import AnswerTypes from "@/types/AnswerTypes";
import { useTitle } from "@/utils/Hooks/useTitle";
import { getQuestion } from "@/utils/Services/questions.api";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface QuestionInterface {
  _id: string;
  title: string;
  answers: AnswerTypes[];
  tags: string[];
  timestamp: string;
  __v: number;
}

const Question = () => {
  const [question, setQuestion] = useState<QuestionInterface>();
  const { id } = useParams();

  useEffect(() => {
    const getData = async (id: string | undefined) => {
      try {
        if (id) {
          const data = await getQuestion(id);
          setQuestion(data.data);
        }
      } catch (e) {
        if (
          (e instanceof AxiosError && e.response?.status === 404) ||
          (e instanceof AxiosError && e.response?.status === 500) ||
          (e instanceof AxiosError && e.response?.status === 400)
        )
          window.location.href = "/404";
        else toast("خطایی رخ داده است", { type: "error" });
      }
    };

    getData(id);
  }, [id, setQuestion]);

  useTitle(question?.title ?? "");

  return (
    <Layout title={"Question.title"} className="max-w-4xl flex flex-col gap-3">
      <SectionLayout className="px-8 py-4">
        <h1 className="text-[19px] font-bold text-[#444]">{question?.title}</h1>
      </SectionLayout>

      {question?.answers.map((answer, index) => (
        <AnswerCard
          key={answer._id}
          data={answer}
          answersCount={question?.answers.length}
          currentAnswer={index + 1}
        />
      ))}
    </Layout>
  );
};

export default Question;
