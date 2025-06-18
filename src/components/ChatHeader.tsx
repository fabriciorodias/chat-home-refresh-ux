
import { MessageSquare } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-bn-primary to-bn-accent rounded-full flex items-center justify-center shadow-lg">
            <MessageSquare className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Conheça sua Assistente de IA - LuzIA</h1>
            <p className="text-gray-600 mt-1">Sua assistente virtual para dúvidas sobre normas de concessão de crédito</p>
          </div>
        </div>
        <div className="w-16 h-16 bg-gradient-to-br from-bn-primary to-bn-accent rounded-full flex items-center justify-center shadow-lg">
          <img 
            src="/lovable-uploads/f516e8ae-21fb-4abd-a064-1119a5ff1b65.png" 
            alt="LuzIA Avatar" 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
