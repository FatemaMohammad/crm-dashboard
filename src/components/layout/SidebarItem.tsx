import type { NavigationItem } from "../../data/navigation";

interface SidebarItemProps {
  item: NavigationItem;
  isActive: boolean;
  onClick: () => void;
}

function SidebarItem({ item, isActive, onClick }: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
        isActive
          ? "bg-blue-50 text-blue-700"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      <Icon
        size={18}
        strokeWidth={2}
        className={isActive ? "text-blue-600" : "text-slate-400"}
      />
      {item.label}
    </button>
  );
}

export default SidebarItem;
