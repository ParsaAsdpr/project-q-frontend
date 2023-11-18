import { LiaHomeSolid } from "react-icons/lia";
import { PiArticle } from "react-icons/pi";
import { MdOutlineCategory, MdOutlineQuestionAnswer } from "react-icons/md";
import NavItem from "./NavItem";

const Navbar = () => {
  const navItems = [
    {
      text: "خانه",
      path: "/feed",
      icon: <LiaHomeSolid />,
    },
    {
      text: "دنبال شده",
      path: "/following",
      icon: <PiArticle />,
      className: "border-x border-black border-opacity-10",
    },
    {
      text: "دسته بندی ها",
      path: "/categories",
      icon: <MdOutlineCategory />,
    },
    {
      text: "پاسخ ها",
      path: "/answers",
      icon: <MdOutlineQuestionAnswer />,
    },
  ];
  return (
    <nav className="flex gap-1">
      {navItems.map((item) => (
        <NavItem
          key={item.text}
          text={item.text}
          icon={item.icon}
          path={item.path}
          className={item.className}
        />
      ))}
    </nav>
  );
};

export default Navbar;
