import SidebarLogo from "./SidebarLogo";

function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
      <SidebarLogo />

      <div className="flex-1 p-6">
        Navigation
      </div>
    </aside>
  );
}

export default Sidebar;