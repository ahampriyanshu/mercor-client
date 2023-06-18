import React, { useState } from "react";
import { FolderMinus, Message } from "iconsax-react";
import { cardData } from "../constant";
import {
  AddSquare,
  ArrowDown2,
  Calendar2,
  MessageQuestion,
  Notification,
  SearchNormal1,
  Calendar1,
  FilterSearch,
  Link21,
  Menu,
  Pause,
  Profile2User,
} from "iconsax-react";
import profile2 from "/profile-2.png";
import profile3 from "/profile-3.png";
import profile4 from "/profile-4.png";
import profile6 from "/profile-5.png";
import avatar from "/profile-1.png";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Dashboard = () => {
  const [boardData, setBoardData] = useState(cardData);

  // function to handle drag and drop
  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Find the source section and task
    const sourceSectionIndex = source.droppableId;
    const sourceTaskIndex = source.index;
    const sourceSection = boardData[sourceSectionIndex];
    const sourceTask = sourceSection.tasks[sourceTaskIndex];

    // Remove the task from the source section
    sourceSection.tasks.splice(sourceTaskIndex, 1);

    // Find the destination section
    const destinationSectionIndex = destination.droppableId;
    const destinationSection = boardData[destinationSectionIndex];

    // Add the task to the destination section
    destinationSection.tasks.splice(destination.index, 0, sourceTask);

    // Update the state with the modified data
    setBoardData([...boardData]);
  };

  return (
    <>
      <nav className="flex flex-col md:flex-row md:items-center justify-between h-20 items-center border-b border-b-[#DBDBDB] md:px-10 px-5">
        {/* Search box */}
        <form action="" className="w-1/3 hidden md:block">
          <div className=" relative flex items-center ">
            <SearchNormal1
              size={20}
              className="pointer-events-none absolute ml-4 text-grayColor"
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
            <div className="hidden md:block">
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

      <section className="my-10 md:px-10 px-5">
        <div className=" flex flex-col md:flex-row md:items-center justify-between space-y-10 md:space-y-0 ">
          {/* Right */}
          <div className=" flex justify-start  space-x-5  ">
            <h2 className=" md:text-5xl text-4xl font-semibold ">Mobile App</h2>
            <div className=" flex items-center justify-center space-x-5 ">
              <button className=" rounded-md bg-[#5030E533] p-1 ">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13749 1.80001L2.64998 8.28751C2.39998 8.53751 2.16249 9.02501 2.11249 9.37501L1.76249 11.85C1.63749 12.75 2.26249 13.375 3.16249 13.25L5.63746 12.9C5.98746 12.85 6.475 12.6125 6.725 12.3625L13.2125 5.87501C14.325 4.76251 14.8625 3.46251 13.2125 1.81251C11.5625 0.150005 10.2625 0.675007 9.13749 1.80001Z"
                    stroke="#5030E5"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className=" rounded-md bg-[#5030E533] p-1 ">
                <Link21 size={16} color="#5030E5" variant="Outline" />
              </button>
            </div>
          </div>

          {/* Left */}
          <div className="flex items-center justify-between md:justify-center md:space-x-5 ">
            {/* invite button */}
            <button className=" flex items-center justify-center space-x-2 ">
              <AddSquare size={20} color="#5030E5" variant="Bulk" />
              <span className=" font-medium text-[#5030E5] ">Invite</span>
            </button>
            {/* Users Profile */}
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                src={profile6}
                alt="{user.handle}"
              />
              <img
                className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                src={profile4}
                alt="{user.handle}"
              />
              <img
                className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                src={profile3}
                alt="{user.handle}"
              />
              <img
                className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                src={profile2}
                alt="{user.handle}"
              />

              <div className=" flex md:h-10 md:w-10 h-8 w-8 items-center justify-center rounded-full bg-red-200 ring-2 ring-white ">
                <span className=" font-medium text-[#D25B68] ">+2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className=" my-10 flex items-center justify-between font-medium text-grayColor ">
          <div className="flex items-center justify-center gap-5  ">
            <button className="flex items-center justify-center space-x-2 rounded-md border border-grayColor px-3 md:py-2 py-1 ">
              <FilterSearch size={18} />
              <span>Filter</span>
              <ArrowDown2 size={18} />
            </button>
            <button className=" flex items-center justify-center space-x-2 rounded-md border border-grayColor px-3 md:py-2 py-1 ">
              <Calendar1 size={18} />
              <span>Today</span>
              <ArrowDown2 size={18} />
            </button>
          </div>

          <div className=" md:flex items-center justify-center space-x-5 hidden ">
            <button className="flex items-center justify-center space-x-2 rounded-md border border-grayColor px-3 py-2 ">
              <Profile2User size={18} />
              <span>Share</span>
            </button>
            <hr className=" h-7 border-[1px] border-grayColor " />
            <div className=" flex h-10 w-10 justify-center rounded-md bg-[#5030E5] ">
              <button className="">
                <Pause
                  variant="Bold"
                  size={20}
                  color="white"
                  className=" rotate-90"
                />
              </button>
            </div>
            <button className="">
              <Menu size={20} color="#787486" />
            </button>
          </div>
        </div>
      </section>

      <DragDropContext onDragEnd={handleDragEnd}>
        <section className="grid lg:grid-cols-3 gap-5 mt-10 md:px-10 px-5">
          {boardData.map((item, sectionIndex) => {
            const { id, title: text, identityColor: markColor, tasks } = item;
            return (
              <div key={id} className="rounded-2xl bg-[#F5F5F5] p-5">
                <div className="flex items-center space-x-2">
                  <span
                    style={{ backgroundColor: `${markColor}` }}
                    className={`h-2 w-2 rounded-full`}
                  ></span>
                  {/* Board title */}
                  <p className="font-medium capitalize text-blackColor">
                    {text}
                  </p>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium">
                    {/* Total task */}
                    {tasks.length}
                  </span>
                  <div className="flex-grow"></div>
                  {text === "to do" && (
                    <div>
                      <AddSquare size={20} color="#5030E5" variant="Bulk" />
                    </div>
                  )}
                </div>
                <hr
                  style={{ borderColor: `${markColor}` }}
                  className={`mt-5 border-2 border-[#${markColor}]`}
                />

                {/* Task card */}
                <Droppable droppableId={sectionIndex.toString()}>
                  {(provided) => (
                    <section
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {tasks.map((task, index) => {
                        const {
                          priority,
                          title,
                          description,
                          image,
                          id,
                          files,
                          comments,
                          users,
                        } = task;
                        return (
                          <Draggable
                            key={id}
                            draggableId={id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <article
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                className={`my-5 rounded-2xl bg-white md:p-8 p-5   `}
                              >
                                <div className="flex items-center justify-between ">
                                  {/* Priority: Low, High, Completed */}
                                  <span
                                    className={`rounded px-2 py-1 text-xs font-medium capitalize ${
                                      priority === "low" &&
                                      "bg-[#DFA87433] text-[#D58D49]"
                                    } ${
                                      priority === "high" &&
                                      "bg-[#D8727D1A] text-[#D8727D] "
                                    }  ${
                                      priority === "completed" &&
                                      "bg-[#83C29D33] text-[#68B266]"
                                    }`}
                                  >
                                    {priority}
                                  </span>
                                  <button className="text-2xl">...</button>
                                </div>
                                {/* Task Card title */}
                                <h3 className="mt-2 text-lg font-semibold text-blackColor">
                                  {title}
                                </h3>
                                {/* Card image */}
                                {image && (
                                  <div className="mt-5">
                                    <img
                                      src={image}
                                      alt=""
                                      className={`h-40 w-full object-cover ${
                                        priority === "completed" &&
                                        "h-64 object-top"
                                      }`}
                                    />
                                  </div>
                                )}
                                {/* Card description */}
                                {description && (
                                  <p
                                    className={`mt-2 ${
                                      priority === "completed"
                                        ? "text-[#0D062D"
                                        : "text-grayColor"
                                    }`}
                                  >
                                    {description}
                                  </p>
                                )}

                                {/* Users image */}
                                <div className="mt-10 flex items-center justify-between">
                                  <div className="flex -space-x-2 overflow-hidden">
                                    {users.map((user, index) => {
                                      return (
                                        <img
                                          key={index}
                                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                          src={user.image}
                                          alt="profile"
                                        />
                                      );
                                    })}
                                  </div>

                                  {/* Comments and Files */}
                                  <div className="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                                    <div className="flex items-center justify-center space-x-2">
                                      <Message />
                                      <span className="">
                                        {comments} comments
                                      </span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                      <FolderMinus />
                                      <span className="">{files} files</span>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </section>
                  )}
                </Droppable>
              </div>
            );
          })}
        </section>
      </DragDropContext>
    </>
  );
};

export default Dashboard;
