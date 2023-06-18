import { AddSquare, ArrowLeft2, Colorfilter, LampOn } from "iconsax-react"
import links from "../utils/links"
import { Link, NavLink } from "react-router-dom"

const projectsItems = [
  {
    id: 1, text: 'mobile app', color: '#7AC555'
  },
  {
    id: 2, text: 'website redesign', color: '#FFA500'
  },
  {
    id: 3, text: 'design system', color: '#E4CCFD'
  },
  {
    id: 4, text: 'wireframes', color: '#76A5EA'
  },
]


const Sidebar = () => {
  return (
    <>
      <section className=" sticky top-0 h-screen px-5 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']  ">
        {/* Logo */}
        <div className=" flex justify-between border-b py-7 px-5 ">
          <div className=" flex items-center justify-between space-x-4 ">
            <Colorfilter size="32" variant="Bulk" color="#5030E5" />
            <h1 className=" xl:text-xl lg:text-base font-semibold ">Project M.</h1>
          </div>
          <button className=" relative flex items-center justify-center ">
            <span className=" absolute -left-2 top-[6px] ">
              <ArrowLeft2 size={20} />
            </span>
            <span className=" ">
              <ArrowLeft2 size={20} />
            </span>
          </button>
        </div>
        {/* Menu links */}
        <div className="  my-5 ">
          {links.map((link) => {
            const { id, text, icon } = link
            return (
              <div key={id} className=" ">
                <Link
                  key={id}
                  className=" flex items-center space-x-4 py-3 text-grayColor px-5"
                >
                  <span className=" font-medium ">{icon}</span>
                  <span className=" font-medium ">{text}</span>
                </Link>
              </div>
            )
          })}
        </div>
        <hr className="bg-[#DBDBDB]" />
        {/* Project links */}
        <div className=" my-5 ">
          <div className=" flex items-center justify-between text-xs font-bold text-grayColor px-5 ">
            <p className=" uppercase ">My Projects</p>
            <button className="">
              <AddSquare className=" h-5 w-5 " />
            </button>
          </div>
          <div className="">
            {projectsItems.map((item) => {
              const { id, text, color } = item
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
              )
            })}
          </div>
        </div>

        {/* Lamp card */}
        <div className=" relative mt-20 rounded-2xl bg-[#5030E514]  ">
          <div className=" absolute inset-x-0 -top-12 flex items-center justify-center ">
            <div className=" flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 backdrop-blur-xl ">
              <div className=" bg-[#FCD64AB2] rounded-full w-10 h-10 ">
              <div className=" absolute flex justify-center items-center backdrop-blur-md w-16 h-16 top-0 right-0 left-0 rounded-full ">
              <LampOn variant="Bulk" size="34" color="#FBCB18"/>
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
            <button className=" rounded bg-white px-6 lg:px-3 py-3 text-center text-sm font-medium text-black  ">
              Write a message
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sidebar