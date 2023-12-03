import { useForm } from "react-hook-form";
import SectionLayout from "../common/SectionLayout";
import { motion } from "framer-motion";
import QuestionTags from "./QuestionTags";
import { KeyboardEvent, useState } from "react";
import questionsApi from "@/utils/Services/questions.api";
import { toast } from "react-toastify";

interface Props {
  onModalClose: () => void;
}

interface IFormInput {
  title: string;
}

const QuestionFormModal = ({ onModalClose }: Props) => {
  const [tags, setTags] = useState<string[]>();
  const { handleSubmit, register } = useForm<IFormInput>();

  const onSubmit = handleSubmit(async (data: IFormInput) => {
    try {
      const res = await questionsApi.postQuestion({
        title: data.title ?? '',
        tags : tags ?? ['']
      });
      console.log(res);
    } catch (e) {
      toast("خطایی رخ داده است", { type: "error" });
    }
  });

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full fixed top-0 left-0 bg-black/30 cursor-default"
        onClick={onModalClose}
      ></motion.div>
      <SectionLayout className="w-1/3 p-6 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex-col flex gap-3">
        {/* TOP SECTION */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              className="rounded-full h-12 w-12"
              src="http://localhost:5000/static/images/default.png"
              alt=""
            />
            <div className="flex flex-col">
              <h5 className="text-[15px] text-[#333]">پارسا</h5>
              <span className="text-[#a6a6a6] text-xs">مدیر سایت</span>
            </div>
          </div>
          <span
            className="text-[#a6a6a6] text-xs cursor-pointer"
            onClick={onModalClose}
          >
            x بستن
          </span>
        </div>
        {/* BODY */}
        <form onSubmit={onSubmit}>
          <textarea
            className="w-full outline-none border border-[#dddddd] bg-[#f6f6f6] py-2 px-3 rounded-[5px] text-sm focus:border-[#47aa76]
           duration-300 resize-none h-[130px] overflow-y-hidden"
            placeholder="سوال خودت رو اینجا بنویسید..."
            {...register("title")}
            onKeyDown={handleKeyDown}
          ></textarea>

          <div className="flex-col flex gap-1.5">
            <h3 className="text-[#333] px-2">موضوعات</h3>
            <QuestionTags onTagsChange={handleTagsChange} />
          </div>

          <button className="w-full text-[#fdfdfd] bg-[#47aa76] rounded-[3px] py-2.5 hover:bg-[#3d9667] transition">
            ثبت سوال
          </button>
        </form>
      </SectionLayout>
    </>
  );
};

export default QuestionFormModal;
