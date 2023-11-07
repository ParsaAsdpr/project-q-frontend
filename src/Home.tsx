import CategoriesSidebar from "./Components/Home/CategoriesSidebar";
import QuestionSection from "./Components/Home/QuestionSection";
import Layout from "./Layout";

function Home() {
  return (
    <Layout title="خانه" className="flex gap-3">
      <div>
        <CategoriesSidebar />
      </div>

      <div className="flex flex-grow self-start">
        <QuestionSection avatar="https://i.pravatar.cc/300" />
      </div>

      <div></div>
    </Layout>
  );
}

export default Home;
