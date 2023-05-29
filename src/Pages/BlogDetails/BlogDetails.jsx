import { BsBookmarkPlus, BsPlayCircle, BsShare, BsHeart } from "react-icons/bs";
import {FaRegComment} from 'react-icons/fa'
const BlogDetails = () => {
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
      <p className="text-justify m-7">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
        perspiciatis explicabo, repellendus suscipit in nihil voluptate
        quibusdam cumque ut nostrum fuga voluptatibus dolorum repudiandae.
        Voluptas facilis nostrum quis itaque at impedit voluptate praesentium,
        dolor est ut veniam officia totam omnis quod pariatur eius repellat.
        Nesciunt repellendus blanditiis nemo dicta, incidunt suscipit cum nisi
        culpa, itaque repudiandae debitis nulla! Aut, itaque at iure fuga
        dignissimos possimus! Vitae a, voluptatem sequi nihil cum consequatur
        error esse et aliquam qui fugiat atque ullam quisquam dolor molestias
        expedita enim. Veritatis culpa accusantium repellendus libero sapiente,
        ratione odit pariatur dicta molestias vitae molestiae voluptas omnis
        voluptatibus unde velit consequuntur magni maxime excepturi. Similique
        animi nobis exercitationem soluta nihil. Labore porro error officia
        iusto ratione minus consequuntur consectetur soluta architecto, dicta
        quis saepe voluptas quibusdam eum perspiciatis placeat atque
        necessitatibus praesentium velit exercitationem blanditiis? Dolores
        nostrum est, voluptatem perferendis, illum repudiandae itaque unde
        velit, distinctio expedita molestiae. At quia tenetur quos, sequi quam
        magni laudantium incidunt est deleniti ullam officiis dignissimos
        debitis earum minus beatae perspiciatis repellendus labore quisquam
        quibusdam tempora itaque qui a possimus voluptatem? Rerum error magni
        quo saepe tempore aliquid recusandae vero deleniti! Nam laboriosam rem
        consequuntur ut accusantium quod nesciunt distinctio magnam!
      </p>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <div className="flex justify-normal items-center gap-4">
          <button><BsHeart/></button>
          <button><FaRegComment/></button>
        </div>
        <div className="flex justify-normal items-center gap-4">
          <button><BsBookmarkPlus/></button>
          <button><BsPlayCircle/></button>
          <button><BsShare/></button>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default BlogDetails;
