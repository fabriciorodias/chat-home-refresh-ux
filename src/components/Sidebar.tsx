
import { Home, Settings, BarChart3 } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-bn-primary h-screen flex flex-col shadow-2xl">
      {/* Logo Section */}
      <div className="p-6 border-b border-bn-secondary/30">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-bn-primary font-bold text-lg">BN</span>
          </div>
          <div className="text-white">
            <h2 className="font-bold text-lg">Banco do</h2>
            <h2 className="font-bold text-lg -mt-1">Nordeste</h2>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          <a 
            href="#" 
            className="flex items-center space-x-3 px-4 py-3 text-white bg-bn-secondary/30 rounded-lg hover:bg-bn-secondary/50 transition-all duration-200"
          >
            <Home size={20} />
            <span className="font-medium">Início</span>
          </a>
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
