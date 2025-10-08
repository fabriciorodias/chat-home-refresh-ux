
import { Home, Settings, BarChart3, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#A6193C] text-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`
        w-64 bg-[#A6193C] h-full flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
        md:translate-x-0 md:relative md:z-auto
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed md:static z-50
      `}>
        {/* Logo Section */}
        <div className="p-4 md:p-8 border-b border-white/20">
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/49466def-81cf-4537-bf05-a5c11305cf13.png" 
              alt="Banco do Nordeste" 
              className="w-full h-auto max-w-[200px]"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 text-white rounded-lg transition-all duration-200 ${
                location.pathname === "/" 
                  ? "bg-white/20" 
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              <Home size={20} />
              <span className="font-medium">Início</span>
            </Link>
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-white/80 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <Settings size={20} />
              <span className="font-medium">Parâmetros</span>
            </a>
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-white/80 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <BarChart3 size={20} />
              <span className="font-medium">Reportes</span>
            </a>
          </div>
        </nav>

        {/* Version */}
        <div className="p-4 border-t border-white/20">
          <p className="text-white/60 text-sm">Versão: 1.1.0</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
