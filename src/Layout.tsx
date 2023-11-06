import { useTitle } from "@/Hooks/useTitle";
import Header from "@/Components/Header/Header";

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
      <div className={`mx-auto max-w-7xl pt-3 ${className}`}>{children}</div>
    </div>
  );
};

export default Layout;
