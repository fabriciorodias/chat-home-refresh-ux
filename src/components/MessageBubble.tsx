
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface MessageBubbleProps {
  message: {
    id: string;
    content: string;
    isUser: boolean;
    timestamp: Date;
  };
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  if (message.isUser) {
    return (
      <div className="flex justify-end mb-4 animate-fade-in">
        <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
          <div className="bg-gradient-to-r from-bn-primary to-bn-accent text-white rounded-2xl rounded-br-md px-4 py-3 shadow-md">
            <p className="text-sm">{message.content}</p>
            <p className="text-xs text-white/80 mt-1">
              {formatDistanceToNow(message.timestamp, { addSuffix: true, locale: ptBR })}
            </p>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-bn-primary to-bn-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            FR
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
        <div className="w-8 h-8 bg-gradient-to-br from-bn-primary to-bn-accent rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img 
            src="/lovable-uploads/6d11c80a-4ac4-4bc6-9e77-bb935fd74a5a.png" 
            alt="LuzIA" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-md">
          <p className="text-sm text-gray-800">{message.content}</p>
          <p className="text-xs text-gray-500 mt-1">
            {formatDistanceToNow(message.timestamp, { addSuffix: true, locale: ptBR })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
