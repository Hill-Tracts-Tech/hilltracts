import { Dna } from "react-loader-spinner";
import './Loader.module.css';
const Loader = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#374151] z-[900000] relative">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
        />
        <h1 className="text-center" data-text="&nbsp;Hill Tracts Tech&nbsp;">
          &nbsp;Hill Tracts Tech&nbsp;
        </h1>
      </div>
    </div>
  );
};

export default Loader;
