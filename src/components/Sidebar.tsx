import { Home, Settings, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-bn-primary h-full flex flex-col shadow-2xl">
      {/* Logo Section */}
      <div className="p-6 border-b border-bn-secondary/30">
        <div className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/3caebf93-14b1-4c43-8bd1-59b9f2b708b1.png" 
            alt="Banco do Nordeste" 
            className="h-12 w-auto"
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
                ? "bg-bn-secondary/30" 
                : "text-white/80 hover:bg-bn-secondary/30"
            }`}
          >
            <Home size={20} />
            <span className="font-medium">Início</span>
          </Link>
          <a 
            href="#" 
            className="flex items-center space-x-3 px-4 py-3 text-white/80 rounded-lg hover:bg-bn-secondary/30 transition-all duration-200"
          >
            <Settings size={20} />
            <span className="font-medium">Parâmetros</span>
          </a>
          <a 
            href="#" 
            className="flex items-center space-x-3 px-4 py-3 text-white/80 rounded-lg hover:bg-bn-secondary/30 transition-all duration-200"
          >
            <BarChart3 size={20} />
            <span className="font-medium">Reportes</span>
          </a>
        </div>
      </nav>

      {/* Version */}
      <div className="p-4 border-t border-bn-secondary/30">
        <p className="text-white/60 text-sm">Versão: 1.1.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
