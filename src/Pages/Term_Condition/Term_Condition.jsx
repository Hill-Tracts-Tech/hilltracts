import { Link } from "react-router-dom";
import {
  infoPurpose,
  objective,
  personalInfoCollect,
  purposesUsage,
  usageInfo,
} from "./PrivacyData";
import { Privacies } from "./Privacy";

const Term_Condition = () => {
  return (
    <div className="w-full h-full p-6">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-wrap justify-between items-center bg-gray-200 shadow-lg p-4 rounded-md">
          <h1 className="md:text-4xl text-2xl font-bold text-[#1DA1F2] uppercase">
            Privacy Policy
          </h1>
          <Link
            to="/"
            className="md:text-4xl text-2xl font-bold underline text-[#1DA1F2]"
          >
            Go To Home
          </Link>
        </div>
        <p className="my-6 font-bold text-2xl">Effective Date: 1June2023</p>
        <p>{objective}</p>
        <h1 className="my-6">Information We Collect</h1>
        <h2 className="text-3xl font-bold ">Personal Information</h2>
        <p className="my-6">{personalInfoCollect}</p>
        <h1 className="text-3xl font-bold ">Usage Information:</h1>
        <p className="my-6">{usageInfo}</p>
        <p>
          We may use the personal information we collect for the following
          purposes:
        </p>
        <ul className="my-6">
          {infoPurpose && infoPurpose.map((data, i) => <li key={i}>{data}</li>)}
        </ul>
        <p>{purposesUsage}</p>
        {Privacies &&
          Privacies.map((data, i) => (
            <div className="my-6" key={i}>
              <h1 className="text-3xl font-bold ">{data.title}</h1>
              <p>{data.description}</p>
            </div>
          ))}
        <div>
          <h1 className="text-2xl font-bold">Hill Tracts Tech</h1>
          <p>Chairman market, Bandarban Sadar, Bandarban</p>
          <a href="tomail:hilltractstech@gmail.com">
            Email: hilltractstech@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Term_Condition;
