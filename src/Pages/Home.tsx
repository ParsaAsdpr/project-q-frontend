import CategoriesSidebar from "@/Components/Home/CategoriesSidebar";
import PostPreview from "@/Components/Home/PostPreview";
import QuestionSection from "@/Components/Home/QuestionSection";
import QuestionPageLoading from "@/Components/Question/QuestionPageLoading";
import Layout from "@/Layout";
import AnswerTypes from "@/types/AnswerTypes";
import { UserTypes } from "@/types/UserTypes";
import { getAnswers } from "@/utils/Services/answer.api";
import authApi from "@/utils/Services/auth.api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Home() {
  const categories = ["رایانه", "علمی", "فناوری", "فرهنگی", "ورزشی"];
  const activeCategory = "رایانه";
  const [answers, setAnswers] = useState<AnswerTypes[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const decodedToken = authApi.getCurrentUser();
  const user: UserTypes = decodedToken as UserTypes;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAnswers();
        setAnswers(data);
        setIsLoading(false);
      } catch (error) {
        if (!toast.isActive("errorToast")) {
          toast("خطایی رخ داده است", {
            type: "error",
            toastId: "errorToast",
          });
        }
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);  

  return (
    <Layout title="خانه" className="grid grid-cols-12 gap-3 max-w-7xl">
      {/* RIGHT SIDE */}
      <CategoriesSidebar
        categories={categories}
        activeCategory={activeCategory}
        className="col-span-2"
      />

      {/* CENTER */}
      <div className="flex flex-col col-span-8 self-start gap-3">
        {user && <QuestionSection />}
        {isError && (
          <div className="flex-col flex mx-auto justify-center items-center gap-4 mt-10">
            <img src="/500.svg" alt="" className="w-1/3" />
            <p className="text-[#333] text-xl font-bold mt-8">خطایی رخ داده است</p>
            <a className="py-2 px-4 bg-[#59dc98] text-white hover:bg-[#49b67e] transition rounded-[3px]" href="/feed">تلاش مجدد</a>
          </div>
        )}
        {isLoading && !isError ? (
          <QuestionPageLoading />
        ) : (
          answers?.map((answer) => (
            <PostPreview
              key={answer._id}
              data={answer}
            />
          ))
        )}
      </div>

      {/* LEFT SIDE */}
      <div className="self-start col-span-2">
        <div className="w-full h-[280px] flex flex-col rounded-sm overflow-hidden">
          <div className="flex-grow"></div>
          <div className="py-2 bg-[#eeeeee] text-[#535353] text-center text-xs">
            تبلیغات
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
