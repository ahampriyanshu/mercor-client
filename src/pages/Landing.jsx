import Dashboard from "../features/Dashboard";
import Sidebar from "../features/Sidebar";
import { useState } from "react";

const Landing = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  return (
    <main className="flex w-full flex-row">
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
        <Dashboard />
      </section>
    </main>
  );
};

export default Landing;
