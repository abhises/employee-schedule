import NavBar from "./_components/NavBar";
import SideBar from "./_components/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block bg-red-500">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
