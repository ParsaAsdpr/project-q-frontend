interface Props {
  name: string;
  avatar: string;
}

const ProfileMenu = ({ name, avatar }: Props) => {
  return (
    <div className="rounded-full border border-black border-opacity-10 p-0.5 flex items-center gap-2">
      <img
        className="w-[33px] h-[33px] lg:w-[38px] lg:h-[38px] rounded-full"
        src={avatar}
        alt="profile picture"
      />
      <p className="text-xs pl-2 hidden lg:block">{name}</p>
    </div>
  );
};

export default ProfileMenu;
