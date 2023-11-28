import React from "react";
import SectionLayout from "../common/SectionLayout";

interface ContainerProps {
  children: React.ReactNode;
}

const QuestionPageLoadingContainer = ({ children }: ContainerProps) => {
  return (
    <SectionLayout className="p-7 select-none">
      <div className="flex gap-2 items-center">
        {/* PROFILE PICTURE */}
        <span className="loading-element h-12 w-12 rounded-full"></span>
        {/* PROFILE INFO */}
        <div className="flex flex-col gap-1">
          <span className="loading-element py-1.5 w-28 rounded-sm"></span>
          <span className="loading-element py-1 w-32 rounded-sm"></span>
        </div>
      </div>

      <div className="flex flex-col mt-6 gap-4">
        {/* TITLE */}
        <span className="loading-element py-2.5 w-[420px] rounded-md"></span>

        {/* BODY */}
        {children}
      </div>
    </SectionLayout>
  );
};

const QuestionPageLoading = () => {
  return (
    <div className="flex flex-col gap-3 select-none">
      <QuestionPageLoadingContainer>
        <div className="flex flex-col gap-1.5">
          <span className="loading-element py-2 rounded-[3px] w-full"></span>
          <span className="loading-element py-2 rounded-[3px] w-[calc(100%-10px)]"></span>
          <span className="loading-element py-2 rounded-[3px] w-[300px]"></span>
        </div>
      </QuestionPageLoadingContainer>

      <QuestionPageLoadingContainer>
        <div className="flex flex-col gap-1.5">
          <span className="loading-element py-2 rounded-[3px] w-[calc(100%-10px)]"></span>
          <span className="loading-element py-2 rounded-[3px] w-[calc(100%-20px)]"></span>
          <span className="loading-element py-2 rounded-[3px] w-[calc(100%-15px)]"></span>
          <span className="loading-element py-2 rounded-[3px] w-[100px]"></span>
          <span className="loading-element w-full h-[400px] rounded-md mt-2"></span>
        </div>
      </QuestionPageLoadingContainer>
    </div>
  );
};

export default QuestionPageLoading;
