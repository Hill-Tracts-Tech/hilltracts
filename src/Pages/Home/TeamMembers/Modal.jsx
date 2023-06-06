const Modal = ({ modalData, setModalOpen }) => {
  return (
    <div className="w-[80%] mx-auto bg-[#eae7e7] p-5 shadow-lg rounded-md relative">
      <button
        onClick={() => setModalOpen(false)}
        className="absolute right-6 top-3 font-bold text-xl hover:bg-red-600 hover:text-white p-2 h-8 w-8 flex justify-center items-center rounded-sm"
      >
        X
      </button>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="md:w-[250px] md:h-[250px] [180px] h-[180px] border-solid border-4 lg:border-2 border-indigo-600 rounded-md">
          <img
            className="w-full h-full rounded-md"
            src={modalData.imgURL}
            alt="image here"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-center font-bold text-[25px] text-gray-700">
            {modalData.name}
          </h1>
          <h3 className="text-center font-semibold text-[20px]">
            {modalData.designation}
          </h3>
          <h2 className="text-center font-bold text-xl my-5">Bio</h2>
          <p className="text-justify font-[400] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            expedita maiores eius natus accusantium iste distinctio tempora
            pariatur rerum porro quis maxime voluptatibus, ab mollitia delectus
            ex tempore veniam doloribus facere cupiditate. Adipisci vitae non
            dolores ex, quas nemo veritatis, amet et facere, rerum voluptatibus
            blanditiis quisquam beatae. Inventore, eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;