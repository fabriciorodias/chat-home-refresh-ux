
import { Home, Settings, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-[#93233b] h-full flex flex-col shadow-2xl">
      {/* Logo Section */}
      <div className="p-8 border-b border-white/20">
        <div className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/49466def-81cf-4537-bf05-a5c11305cf13.png" 
            alt="Banco do Nordeste" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          <Link 
            to="/" 
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
            className="flex items-center space-x-3 px-4 py-3 text-white/80 rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            <Settings size={20} />
            <span className="font-medium">Parâmetros</span>
          </a>
          <a 
            href="#" 
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
  );
};

export default Sidebar;
