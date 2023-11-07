import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  text: string;
  path: string;
  icon: React.ReactNode;
  className?: string;
}

const NavItem = ({ text, icon, path, className }: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <NavLink to={path} title={text}>
      {({ isActive }) => (
        <div
          className={`${className} flex gap-1 px-4 items-center relative transition ${
            isActive ? "text-black font-semibold" : "text-[#6e6e6e] font-normal hover:text-[#3b3b3b]"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-xl">{icon}</span>
          <p className="text-[13px] hidden lg:block">{text}</p>
          <div
            className={`${isActive && !isHovered ? " w-1.5" : "w-0"} ${
              isHovered && "w-[calc(100%-40%)]"
            } duration-200 h-1.5 rounded-full bg-[#4ecc8b] absolute -bottom-[13px] left-1/2 -translate-x-1/2`}
          ></div>
        </div>
      )}
    </NavLink>
  );
};

export default NavItem;
