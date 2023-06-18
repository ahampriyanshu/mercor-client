import { Filter, Navbar, Sidebar, TaskBoard } from "../components";
import { useState } from "react";

const Landing = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  return (
    <main className="flex w-full flex-row overflow-hidden">
      <aside
        className={`${
          sidebarVisible ? "sidebar-active" : "siderbar-hidden"
        } md:flex  md:border-r hidden sidebar`}
      >
        <Sidebar
          toggleSidebar={toggleSidebar}
          sidebarVisible={sidebarVisible}
        />
      </aside>
      <section className="mb-12 w-full">
        <Navbar sidebarVisible={sidebarVisible} />
        <Filter />
        <TaskBoard />
      </section>
    </main>
  );
};

export default Landing;
