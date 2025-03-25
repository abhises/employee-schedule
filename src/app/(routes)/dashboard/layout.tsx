"use client";
import NavBar from "./_components/NavBar";
import SideBar from "./_components/SideBar";
import { SideBarProvider, useSideBar } from "./_context/SideBarContext";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSideBar(); // Get sidebar state from context

  return (
    <div>
      <div
        className={`fixed md:w-64 ${
          isOpen ? "w-[100%]" : "hidden"
        } md:block bg-red-500`}>
        <SideBar />
      </div>
      <div className="md:ml-64">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SideBarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SideBarProvider>
  );
};

export default DashboardLayout;
