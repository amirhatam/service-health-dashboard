import { LayoutDashboard, Server, History, Settings } from "lucide-react";

function Sidebar() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="w-full md:w-64 shrink-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
              >
                <LayoutDashboard className="w-5 h-5" />

                <span className="flex-1 ms-3 whitespace-nowrap">Overview</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
              >
                <Server className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
              >
                <History className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Monitoring History
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
              >
                <Settings className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
