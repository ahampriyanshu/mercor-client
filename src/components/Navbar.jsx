import {
  ArrowDown2,
  Calendar2,
  MessageQuestion,
  Notification,
  SearchNormal1,
} from "iconsax-react";

import avatar from "../assets/avatar.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row md:items-center justify-between border-b border-b-[#DBDBDB] py-5">
        {/* Search box */}
        <form action="" className=" w-1/3 hidden md:block ">
          <div className=" relative flex items-center ">
            <SearchNormal1
              size={20}
              className="pointer-events-none absolute ml-4 text-grayColor "
            />
            <input
              type="text"
              className=" w-full rounded-md border-none bg-[#F5F5F5] py-3 pl-14 pr-3 text-sm outline-none ring-0 placeholder:text-grayColor  focus:border-none focus:ring-0"
              placeholder="Search for anything..."
            />
          </div>
        </form>

        <div className=" flex md:items-center md:justify-center justify-between md:space-x-10 ">
          {/* Icons */}
          <div className=" flex items-center justify-center space-x-5 text-grayColor ">
            <button className="">
              <Calendar2 />
            </button>
            <button className="">
              <MessageQuestion />
            </button>
            <button className="relative">
              <Notification />
              <span className=" absolute right-[2px] top-[1px] h-2 w-2 rounded-full bg-[#D8727D] "></span>
            </button>
          </div>

          {/* User Avatar */}
          <div className=" flex items-center justify-center space-x-5  ">
            <div className="">
              <p className=" text-black ">Anima Agarwal</p>
              <p className=" text-right text-sm text-grayColor ">U.P, India</p>
            </div>

            <div className=" flex items-center justify-center space-x-3 ">
              <img
                className=" h-12 w-12 rounded-full object-cover  object-top "
                src={avatar}
                alt=""
              />
              <ArrowDown2 size={20} className=" text-[#292D32] " />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
