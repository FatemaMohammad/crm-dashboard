import { Share2 } from "lucide-react";

function SidebarLogo() {
  return (
    <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
        <Share2 size={22} strokeWidth={2.25} />
      </div>

      <div>
        <h1 className="text-lg font-bold text-slate-900">
          WeZimplify
        </h1>

        <p className="text-sm text-slate-500">
          CRM Dashboard
        </p>
      </div>
    </div>
  );
}

export default SidebarLogo;