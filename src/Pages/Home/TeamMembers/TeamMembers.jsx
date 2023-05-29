import "../../../styles/styles.css";
import { data } from "./data";
import Member from "./Member";
const TeamMembers = () => {
  return (
    <div className="w-[90%] mx-auto mb-10">
      <div className="s-title-outline w-48 mx-auto mt-20">
        <h2 className="text-lg font-semibold text-[#1DA1F2] s-title text-center uppercase">
          Team
        </h2>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="text-3xl font-bold text-center capitalize">
          Our Best Team members
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-3 mt-8">
        {
          data&&
          data.map((info) => (
          <Member
            key={info.id}
            info={info}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
