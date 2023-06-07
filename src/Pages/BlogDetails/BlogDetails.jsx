import { BsBookmarkPlus, BsPlayCircle, BsShare, BsEye } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
const BlogDetails = () => {
  const blog = useLoaderData();
  return (
    <div className="w-[90%] mx-auto p-9 flex md:flex-nowrap flex-wrap justify-between items-center gap-4">
      <div className="w-full md:w-[70%]">
        <h2 className="text-2xl font-bold text-center">{blog.title}</h2>
        <div className="flex justify-start items-center gap-3 my-5">
          <img
            className="w-[70px] h-[70px] rounded-full"
            src="https://i.ibb.co/gJmbQS0/uhai.jpg"
            alt=""
          />
          <div>
            <h3 className="text-xl font-semibold">{blog.author}</h3>
            <span className="flex justify-between items-center">
              <p>3 min</p>
              <p>{blog.date}</p>
            </span>
          </div>
        </div>
        {blog.content.map((cont, i) => (
          <div className="" key={i}>
            <h2 className="font-bold text-xl">{cont?.subTitle}</h2>
            <p className="text-md leading-10">{cont?.description}</p>
          </div>
        ))}
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div className="flex justify-normal items-center gap-4">
            <div>
              <button title="Viewed">
                <BsEye />
              </button>
              <sup className="ml-2">3</sup>
            </div>
            <button title="Comment">
              <FaRegComment />
            </button>
          </div>
          <div className="flex justify-normal items-center gap-4">
            <button title="Add To Bookmark">
              <BsBookmarkPlus />
            </button>
            <button title="Play">
              <BsPlayCircle />
            </button>
            <button title="Share Now">
              <BsShare />
            </button>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      <div className="w-full md:w-[30%]">
        <h1 className="text-2xl font-semibold text-center underline underline-offset-8">
          Relevant Blogs
        </h1>
        <div className="h-[500px] md:overflow-y-scroll overflow-hidden border-l-4 border-indigo-500 p-4">
          <Link className="hover:underline cursor-pointer">
            No Relevant News or Blog found
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
