import { useState } from "react";
import SidebarLogo from "./SidebarLogo";
import SidebarSection from "./SidebarSection";
import { navigation } from "../../data/navigation";

function Sidebar() {
  const [activeLabel, setActiveLabel] = useState("Dashboard");

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
      <SidebarLogo />

      <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-6">
        {navigation.map((section) => (
          <SidebarSection
            key={section.title}
            section={section}
            activeLabel={activeLabel}
            onSelect={setActiveLabel}
          />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;