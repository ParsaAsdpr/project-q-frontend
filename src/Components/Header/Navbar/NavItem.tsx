import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  text: string;
  path: string;
  icon: React.ReactNode;
  className?: string;
}

const NavItem = ({ text, icon, path, className }: Props) => {
  return (
    <NavLink to={path} title={text}>
      {({ isActive }) => (
        <div
          className={`${className} flex gap-1 px-4 items-center relative ${
            isActive ? "text-black font-semibold" : "text-[#6e6e6e] font-normal"
          }`}
        >
          <span className="text-xl">{icon}</span>
          <p className="text-[13px] hidden lg:block">{text}</p>
          <div
            className={`${
              isActive && " w-2"
            } h-2 rounded-full bg-[#4ecc8b] absolute -bottom-4 left-1/2 -translate-x-1/2`}
          ></div>
        </div>
      )}
    </NavLink>
  );
};

export default NavItem;
