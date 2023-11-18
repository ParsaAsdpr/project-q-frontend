interface Props{
    name: string;
    bio: string;
    avatar: string;
}

const UserProfile = ({bio, name, avatar}: Props) => {
    return (
        <div className="flex gap-2 items-center">
          <img
            src={avatar}
            alt="profile picture"
            className="rounded-full w-10 h-10 overflow-hidden"
          />
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-2 items-center">
              <h4 className="text-[16px] text-[#333333] ">{name}</h4>
              <button className="text-[#59dc98] text-[11px] cursor-pointer border border-[#59dc98] rounded-sm px-1 hover:bg-[#59dc98] hover:text-white transition">
                دنبال کردن
              </button>
            </div>
            <p className="text-[#7d7d7d] text-[10px]">{bio}</p>
          </div>
        </div>

    );
};

export default UserProfile;