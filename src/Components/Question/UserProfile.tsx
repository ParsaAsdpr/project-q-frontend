import { apiUrl } from "@/config.json";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  job: string;
  avatar: string;
  username: string;
}

const UserProfile = ({ job, name, avatar, username }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <Link to={`/profile/${username}`} target="_blank">
        <img
          src={`${apiUrl}${avatar}`}
          alt="profile picture"
          className="rounded-full w-12 h-12 overflow-hidden"
        />
      </Link>
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-2 items-center">
          <Link
            className="text-[16px] text-[#333333]"
            to={`/profile/${username}`}
          >
            {name}
          </Link>
          <button className="text-[#59dc98] text-[11px] cursor-pointer border border-[#59dc98] rounded-sm px-1 hover:bg-[#59dc98] hover:text-white transition">
            دنبال کردن
          </button>
        </div>
        <p className="text-[#7d7d7d] text-[10px]">{job}</p>
      </div>
    </div>
  );
};

export default UserProfile;
