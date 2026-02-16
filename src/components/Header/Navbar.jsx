import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center font-black text-slate-950">
              RD
            </div>
            <div>
              <div className="text-lg text-white font-semibold">
                RestaurantDesign.tech
              </div>
              <div className="text-xs text-slate-400 hidden sm:block">
                Restaurant Tech & Automation
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative transition font-medium ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-emerald-400 rounded-full"></span>
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <NavLink
            to="/contact"
            className="hidden md:inline-flex rounded-full px-4 py-2 text-sm font-medium bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition"
          >
            Book a Call
          </NavLink>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden h-10 w-10 flex items-center justify-center border border-slate-800 rounded-full text-white"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur">
          <div className="absolute right-0 top-0 h-full w-80 bg-slate-950 border-l border-slate-800 p-6">

            <div className="flex justify-between items-center mb-6 text-white">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `block font-medium transition ${
                      isActive
                        ? "text-emerald-400"
                        : "text-slate-200 hover:text-emerald-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 block text-center rounded-full px-4 py-3 bg-emerald-400 text-slate-950 font-medium"
            >
              Book a Call
            </NavLink>

          </div>
        </div>
      )}
    </>
  );
}