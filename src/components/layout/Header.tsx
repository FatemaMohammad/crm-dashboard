import { Bell, Menu, Search } from "lucide-react";
import Avatar from "../common/Avatar";

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open menu"
          onClick={onMenuClick}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 lg:hidden"
        >
          <Menu size={18} />
        </button>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Dashboard</h2>
          <p className="hidden text-sm text-slate-500 sm:block">
            Welcome back, here's what's happening today.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            aria-label="Search customers, deals..."
            placeholder="Search customers, deals..."
            className="w-64 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50"
        >
          <Bell size={18} />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
          <Avatar name="Fatema Mohammad" />
          <div className="hidden md:block">
            <p className="text-sm font-medium text-slate-900">Fatema Mohammad</p>
            <p className="text-xs text-slate-500">Sales Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
