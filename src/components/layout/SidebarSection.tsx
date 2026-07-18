import type { NavigationSection } from "../../data/navigation";
import SidebarItem from "./SidebarItem";

interface SidebarSectionProps {
  section: NavigationSection;
  activeLabel: string;
  onSelect: (label: string) => void;
}

function SidebarSection({ section, activeLabel, onSelect }: SidebarSectionProps) {
  return (
    <div>
      <p className="px-3 text-xs font-semibold tracking-wider text-slate-400">
        {section.title}
      </p>

      <div className="mt-2 flex flex-col gap-1">
        {section.items.map((item) => (
          <SidebarItem
            key={item.label}
            item={item}
            isActive={item.label === activeLabel}
            onClick={() => onSelect(item.label)}
          />
        ))}
      </div>
    </div>
  );
}

export default SidebarSection;
