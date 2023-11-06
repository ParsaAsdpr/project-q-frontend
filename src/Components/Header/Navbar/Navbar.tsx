import { LiaHomeSolid } from "react-icons/lia";
import { PiArticle } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import NavItem from "./NavItem";

const Navbar = () => {
  const navItems = [
    {
      text: "خانه",
      path: "/",
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
  ];
  return (
    <div className="flex gap-1">
      {navItems.map((item) => (
        <NavItem
          key={item.text}
          text={item.text}
          icon={item.icon}
          path={item.path}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default Navbar;
