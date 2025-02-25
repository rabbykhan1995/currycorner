import SidePanel from "@/components/admin/SidePanel/SidePanel";



const Layout = ({ children }) => {
    return <div className="flex bg-zinc-700 h-[100vh]">
        <SidePanel />{children}
        </div>;
  };
  
  export default Layout;