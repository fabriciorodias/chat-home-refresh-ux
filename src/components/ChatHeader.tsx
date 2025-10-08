
import { Plus } from "lucide-react";

interface ChatHeaderProps {
  onNewChat?: () => void;
}

const ChatHeader = ({ onNewChat }: ChatHeaderProps) => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#A6193C] to-[#851529] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <img 
              src="/lovable-uploads/6d11c80a-4ac4-4bc6-9e77-bb935fd74a5a.png" 
              alt="LuzIA Assistant" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">LuzIA</h1>
            <p className="text-gray-600 mt-1">Sua assistente virtual para dúvidas sobre normas de concessão de crédito</p>
          </div>
        </div>
        {onNewChat && (
          <button
            onClick={onNewChat}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-br from-[#A6193C] to-[#851529] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
            title="Nova conversa"
          >
            <span className="text-white text-sm font-medium">Novo chat</span>
            <Plus className="text-white group-hover:scale-110 transition-transform duration-200" size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
