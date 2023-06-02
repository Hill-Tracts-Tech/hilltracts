import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="w-full h-[500px] relative mt-[-100px]">
        <img
          className="w-full h-full object-cover mt-[-100px]"
          src="https://i.ibb.co/zRbvgPF/contactus.png"
          alt="Banner"
        />
        <div className="absolute text-white font-bold top-[59.5%] left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl uppercase">
          Get in touch
        </div>
      </div>
      <div className="max-w-[90%] mx-auto mb-10">
        <div className="lg:w-[60%] sm:w-[100%] mt-24 mx-auto">
          <div className="text-left flex flex-col border rounded-xl p-4 sm:p-6 common">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Fill in the form
            </h2>

            <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium dark:text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="py-3 px-4 block w-full border-gray-300 border-blue border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    ></input>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 font-medium dark:text-white">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="py-3 px-4 block w-full border-gray-300 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-300 rounded-md text-sm focus:border-blue-500 border focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    ></input>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 font-medium dark:text-white">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    className="py-3 px-4 block w-full border-gray-500 rounded-md text-sm focus:border-blue-300 border focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
          <div
            className="flex flex-col h-full text-center rounded-md bg-gray-100 hover:bg-gray-200 p-4 sm:p-6 dark:hover:bg-white/[.05] common"
            href="#"
          >
            <img
              src="https://i.ibb.co/2Y9vPPd/phone-Call.png"
              className="w-[80px]  mx-auto"
              alt=""
            />
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Give us a call
              </h3>
              <a
                className="mt-1 text-gray-500 block"
                href="tel:+8801818-266 226"
              >
                (+880) 1818-266 226
              </a>
              <a className="mt-1 text-gray-500" href="tel:+8801728-010 810">
                (+880) 1728-010 810
              </a>
            </div>
          </div>
          <div
            className="flex flex-col h-full text-center rounded-md bg-gray-100 hover:bg-gray-200 p-4 sm:p-6 dark:hover:bg-white/[.05] common"
            href="#"
          >
            <img
              src="https://i.ibb.co/FsqPvPF/office.png"
              className="w-[80px] mx-auto"
              alt=""
            />
            <div className="grow">
              <Link
                target={"_blank"}
                to="https://goo.gl/maps/PiLYVnRvFwj7NZwP9?coh=178571&entry=tt"
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:underline hover:text-blue-500"
              >
                Visit our office
              </Link>
              <p className="mt-1 text-gray-500">
                Bandarban, Chittagong, Bangladesh
              </p>
            </div>
          </div>
          <div
            className="flex flex-col h-full text-center rounded-md bg-gray-100 hover:bg-gray-200 p-4 sm:p-6 dark:hover:bg-white/[.05] common"
            href="#"
          >
            <img
              src="https://i.ibb.co/s6RW30g/email.png"
              className="w-[80px] mx-auto"
              alt=""
            />
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Drop us a line
              </h3>
              <a
                href="mailto:chttravel.htt@gmail.com"
                className="mt-1 text-gray-500 block"
              >
                chttravel.htt@gmail.com
              </a>
              <a
                href="mailto:hilltractstech@gmail.com"
                className="mt-1 text-gray-500"
              >
                hilltractstech@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
