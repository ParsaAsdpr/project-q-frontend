interface Props {
  text: string;
  activeTab: string;
  onClick: () => void;
}

const HeaderTab = ({ text, activeTab, onClick }: Props) => {
  return (
    <div
      className={`${
        activeTab === text ? "text-[#47aa76] font-bold" : "text-[#6e6e6e]"
      } text-sm md:text-base cursor-pointer relative px-1`}
      onClick={() => onClick()}
    >
      <p>{text}</p>
      <span
        className={`${
          activeTab === text ? "w-full" : "w-0"
        } duration-150 bg-[#47aa76] h-1 rounded-full absolute -bottom-2 md:-bottom-2.5 right-1/2 translate-x-1/2`}
      ></span>
    </div>
  );
};

export default HeaderTab;
