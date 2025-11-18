import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Kezdőlap" },
  { to: "/about", label: "Rólunk" },
  { to: "/programs", label: "Programok" },
  { to: "/leaders", label: "Vezetők" },
  { to: "/info", label: "Gyakorlat" },
  { to: "/testimonials", label: "Visszajelzések" },
  { to: "/join", label: "Csatlakozz" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#111315]/80 backdrop-blur border-b border-[#7A7F85]/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-[#173F2A] flex items-center justify-center text-[#ECE7E1] font-bold">A</div>
          <span className="text-[#ECE7E1] font-semibold tracking-tight">All Male Area</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#ECE7E1] border-b-2 border-[#B33A2F] pb-1'
                    : 'text-[#ECE7E1]/80 hover:text-[#ECE7E1]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/join" className="inline-flex items-center rounded-md bg-[#173F2A] text-[#ECE7E1] px-4 py-2 text-sm font-semibold hover:bg-[#145233] transition-colors">
          Csatlakozom a Körhöz
        </Link>
      </div>
    </header>
  );
}
