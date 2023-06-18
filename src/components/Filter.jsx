import {
  AddSquare,
  ArrowDown2,
  Calendar1,
  Edit,
  FilterSearch,
  Link21,
  Menu,
  Pause,
  Profile2User,
} from "iconsax-react";
import EditIcon from "../components/EditIcon";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
const Filter = () => {
  return (
    <section className=" my-10 ">
      <div className=" flex flex-col md:flex-row md:items-center justify-between space-y-10 md:space-y-0 ">
        {/* Right */}
        <div className=" flex justify-start  space-x-5  ">
          <h2 className=" md:text-5xl text-4xl font-semibold ">Mobile App</h2>
          <div className=" flex items-center justify-center space-x-5 ">
            <button className=" rounded-md bg-[#5030E533] p-1 ">
              <EditIcon />
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
          <div className="flex -space-x-2 overflow-hidden ">
            <img
              className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
              src={user5}
              alt="{user.handle}"
            />
            <img
              className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
              src={user4}
              alt="{user.handle}"
            />
            <img
              className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
              src={user3}
              alt="{user.handle}"
            />
            <img
              className="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
              src={user2}
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
  );
};

export default Filter;
