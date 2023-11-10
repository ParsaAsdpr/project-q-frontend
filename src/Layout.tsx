import { useTitle } from "@/Hooks/useTitle";
import Header from "@/Parts/Header";
import Footer from "@/Parts/Footer";

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const Layout = ({ children, title, className }: Props) => {
  useTitle(title);

  return (
    <div dir="rtl">
      <Header />
      <div className={`mx-auto max-w-7xl pt-3 ${className} h-screen`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
