
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const UserProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#93233b] border-t border-white/20 w-64">
      {/* Mobile collapsed view */}
      <div className="md:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-3 flex items-center justify-between text-white"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#93233b] font-bold text-xs">
              FR
            </div>
            <span className="text-sm font-medium truncate">FABRÍCIO</span>
          </div>
          {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
        
        {isExpanded && (
          <div className="px-3 pb-3">
            <p className="text-xs text-white/80 truncate">F121690</p>
          </div>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#93233b] font-bold shadow-md flex-shrink-0">
            FR
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white truncate text-sm">FABRÍCIO Rocha de Oliveira Dias</p>
            <p className="text-xs text-white/80 truncate">F121690</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
