import CategoriesSidebar from "@/Components/Home/CategoriesSidebar";
import PostPreview from "@/Components/Home/PostPreview";
import QuestionSection from "@/Components/Home/QuestionSection";
import Layout from "@/Layout";
import axios from "axios";

function Home() {
  const categories = ["رایانه", "علمی", "فناوری", "فرهنگی", "ورزشی"];
  const activeCategory = "رایانه";

  axios.get("http://localhost:5000/api/questions").then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err)
  })

  return (
    <Layout title="خانه" className="grid grid-cols-12 gap-3">
      {/* RIGHT SIDE */}
      <CategoriesSidebar
        categories={categories}
        activeCategory={activeCategory}
        className="col-span-2"
      />

      {/* CENTER */}
      <div className="flex flex-col col-span-8 self-start gap-3 ">
        <QuestionSection avatar="https://i.pravatar.cc/300" />
        <PostPreview
          name="پارسا"
          avatar="https://i.pravatar.cc/300"
          bio="لورم ایپسوم متن ساختگی با تولید سادگی "
          title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
          answer="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد 
          "
        />
        <PostPreview
          name="پارسا"
          avatar="https://i.pravatar.cc/300"
          bio="لورم ایپسوم متن ساختگی با تولید سادگی "
          title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت "
          answer="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک 
          "
        />
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
