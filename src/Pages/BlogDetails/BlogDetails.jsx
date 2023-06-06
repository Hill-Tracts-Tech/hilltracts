import { BsBookmarkPlus, BsPlayCircle, BsShare, BsEye } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
const BlogDetails = () => {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-2xl font-bold">Blog Title</h2>
      <div className="flex justify-start items-center gap-3">
        <img
          className="w-[70px] h-[70px] rounded-full"
          src="https://i.ibb.co/gJmbQS0/uhai.jpg"
          alt=""
        />
        <div>
          <h3 className="text-xl font-semibold">writer Name</h3>
          <span className="flex justify-between items-center">
            <p>3 min</p>
            <p>Mar 24</p>
          </span>
        </div>
      </div>
      <p className="text-justify m-7">Coming soon!!!</p>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <div className="flex justify-normal items-center gap-4">
          <div>
            <button>
              <BsEye />
            </button>
            <sup className="ml-2">3</sup>
          </div>
          <button>
            <FaRegComment />
          </button>
        </div>
        <div className="flex justify-normal items-center gap-4">
          <button>
            <BsBookmarkPlus />
          </button>
          <button>
            <BsPlayCircle />
          </button>
          <button>
            <BsShare />
          </button>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default BlogDetails;
