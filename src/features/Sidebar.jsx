import { AddSquare, ArrowLeft2, Colorfilter, LampOn } from "iconsax-react";
import { linkData, profileData } from "../constant";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ sidebarVisible, toggleSidebar }) => {
  return (
    <div>
      <section className="sticky top-0 h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className=" flex justify-between items-center border-b px-5 h-20">
          <div className={sidebarVisible ? "" : "hidden"}>
            <div className="flex items-center justify-between space-x-4 ">
              <Colorfilter size="32" variant="Bulk" color="#5030E5" />
              <h1 className="xl:text-xl lg:text-base font-semibold ">
                Project M.
              </h1>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className={`relative flex items-center justify-center ${
              sidebarVisible ? "sidebar-button" : "sidebar-button-rotated"
            }`}
          >
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 17.225C18.3417 17.225 18.1833 17.1667 18.0583 17.0417L12.625 11.6083C11.7417 10.725 11.7417 9.27499 12.625 8.39165L18.0583 2.95832C18.3 2.71665 18.7 2.71665 18.9417 2.95832C19.1833 3.19999 19.1833 3.59999 18.9417 3.84165L13.5083 9.27499C13.1083 9.67499 13.1083 10.325 13.5083 10.725L18.9417 16.1583C19.1833 16.4 19.1833 16.8 18.9417 17.0417C18.8167 17.1583 18.6583 17.225 18.5 17.225Z"
                fill="#787486"
              />
              <path
                d="M12.5 17.225C12.3417 17.225 12.1833 17.1667 12.0583 17.0417L6.62499 11.6083C5.74166 10.725 5.74166 9.27499 6.62499 8.39165L12.0583 2.95832C12.3 2.71665 12.7 2.71665 12.9417 2.95832C13.1833 3.19999 13.1833 3.59999 12.9417 3.84165L7.50833 9.27499C7.10833 9.67499 7.10833 10.325 7.50833 10.725L12.9417 16.1583C13.1833 16.4 13.1833 16.8 12.9417 17.0417C12.8167 17.1583 12.6583 17.225 12.5 17.225Z"
                fill="#787486"
              />
            </svg>
          </button>
        </div>

        <div className="my-5">
          {linkData.map((link) => {
            const { id, text, icon } = link;
            return (
              <div key={id} className=" ">
                <Link
                  key={id}
                  className=" flex items-center space-x-4 py-3 text-grayColor px-5"
                >
                  <span className=" font-medium ">{icon}</span>
                  <div className={sidebarVisible ? "" : "hidden"}>
                    {" "}
                    <span className=" font-medium ">{text}</span>{" "}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className={sidebarVisible ? "" : "hidden"}>
          <hr className="bg-[#DBDBDB]" />
          {/* Project links */}
          <div className=" my-5 ">
            <div className=" flex items-center justify-between text-xs font-bold text-grayColor px-5 ">
              <p className=" uppercase ">My Projects</p>
              <button className="">
                <AddSquare className="h-5 w-5" />
              </button>
            </div>
            <div className="">
              {profileData.map((item) => {
                const { id, text, color } = item;
                return (
                  <NavLink
                    key={id}
                    className="my-5 flex items-center space-x-4 rounded-md py-2 font-medium text-grayColor first:bg-[#5030E514] first:font-semibold first:text-[#0D062D] overflow-visible px-5 "
                    end
                  >
                    <span
                      style={{ backgroundColor: `${color}` }}
                      className={`h-2 w-2 rounded-full `}
                    ></span>
                    <p className=" capitalize">{text}</p>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="relative mt-20 rounded-2xl bg-[#5030E514] mx-5">
            <div className=" absolute inset-x-0 -top-12 flex items-center justify-center ">
              <div className=" flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 backdrop-blur-xl ">
                <div className=" bg-[#FCD64AB2] rounded-full w-10 h-10 ">
                  <div className=" absolute flex justify-center items-center backdrop-blur-md w-16 h-16 top-0 right-0 left-0 rounded-full ">
                    <LampOn variant="Bulk" size="34" color="#FBCB18" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center space-y-5 px-10 lg:px-5 py-5 mb-20 ">
              <p className=" mt-3 font-medium text-black ">Thoughts Time</p>
              <p className=" text-center text-xs text-grayColor ">
                We don't have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
              <button className="rounded bg-white px-6 lg:px-3 py-3 text-center text-sm font-medium text-black  ">
                Write a message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
