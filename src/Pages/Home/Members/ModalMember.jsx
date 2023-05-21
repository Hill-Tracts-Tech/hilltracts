import PropsTypes from "prop-types";
const ModalMember = (visible) => {
  if (!visible) {
    return null;
  } else {
    return (
      <div className="w-2/3 bg-black inset-0 mx-auto bg-opacity-30 backdrop-blur-sm">
        <div className="bg-white rounded-md">
          <h1>Modal</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            consectetur accusamus ex aperiam nesciunt vero quasi aliquid
            laboriosam perferendis, similique eaque blanditiis deleniti
            explicabo provident obcaecati dolor temporibus culpa quam eveniet
            numquam voluptatibus a et. Autem, dolorum? Excepturi cumque
            recusandae nulla facilis, illum minus repellat omnis accusantium
            optio sed dolorum doloremque deserunt aspernatur cupiditate
            inventore ab debitis sint tempora ratione similique officia quidem
            amet molestias pariatur? Eos omnis voluptates minus debitis
            reprehenderit maiores quaerat eveniet, nulla ut perspiciatis, dolor
            eligendi, recusandae nesciunt officiis unde voluptate fugit?
            Mollitia obcaecati, nam, quibusdam officia neque impedit quisquam
            numquam provident eius, voluptas quaerat unde!
          </p>
        </div>
      </div>
    );
  }
};

ModalMember.prototypes = {
  visible: PropsTypes.bool.isRequired,
};

export default ModalMember;
