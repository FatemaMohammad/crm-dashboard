import { useState } from "react";
import { X } from "lucide-react";
import SidebarLogo from "./SidebarLogo";
import SidebarSection from "./SidebarSection";
import { navigation } from "../../data/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeLabel, setActiveLabel] = useState("Dashboard");

  function handleSelect(label: string) {
    setActiveLabel(label);
    onClose();
  }

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
        >
          <X size={18} />
        </button>

        <SidebarLogo />

        <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-6">
          {navigation.map((section) => (
            <SidebarSection
              key={section.title}
              section={section}
              activeLabel={activeLabel}
              onSelect={handleSelect}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;