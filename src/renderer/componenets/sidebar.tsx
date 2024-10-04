import { NavLink } from 'react-router-dom';


export default function Sidebar() {
  const navs = [
    {
      Label : "Home",
      icon : "🏠",
      path : "/home"
    },
    {
      Label : "Students",
      icon : "👥",
      path : "/students"
    },
    {
      Label : "Rooms",
      icon : "🚪",
      path : "/students"
    },
    {
      Label : "Dues",
      icon : "💵",
      path : "/students"
    },
    {
      Label : "Billing",
      icon : "🧾",
      path : "/students"
    },

  ]
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-r-gray-400 border-dashed"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
        <ul className="space-y-2 font-medium">
          {
            navs.map((nav) => (
              <li>
            <NavLink
              to={nav.path}
              className={({isActive}) => isActive ? "flex items-center p-2 text-gray-900 rounded-lg bg-gray-200 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"}
            >
              <span>{nav.icon}</span>
              <span className="ms-3">{nav.Label}</span>
            </NavLink>
          </li>
            ))
          }
        </ul>
      </div>
    </aside>
  );
}
