import { LayoutDashboard, Server, History, Settings } from "lucide-react";

function Sidebar() {
  return (
    <>
      {/* Mobile menu button */}
      {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M5 7h14M5 12h14M5 17h10"
          />
        </svg>
      </button> */}

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
