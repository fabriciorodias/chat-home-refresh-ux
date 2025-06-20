
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import MessageActions from "./MessageActions";

interface MessageBubbleProps {
  message: {
    id: string;
    content: string;
    isUser: boolean;
    timestamp: Date;
    references?: string[];
    feedback?: 'up' | 'down' | null;
  };
  onFeedback: (messageId: string, feedback: 'up' | 'down') => void;
}

const MessageBubble = ({ message, onFeedback }: MessageBubbleProps) => {
  if (message.isUser) {
    return (
      <div className="flex justify-end mb-4 animate-fade-in">
        <div className="flex items-end space-x-3 max-w-xs lg:max-w-md">
          <div className="bg-gradient-to-r from-bn-primary to-bn-accent text-white rounded-2xl rounded-br-md px-4 py-3 shadow-md">
            <p className="text-sm">{message.content}</p>
            <p className="text-xs text-white/80 mt-1">
              {formatDistanceToNow(message.timestamp, { addSuffix: true, locale: ptBR })}
            </p>
          </div>
          <div className="w-9 h-9 bg-gradient-to-br from-bn-primary to-bn-accent rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-md">
            F121690
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="flex items-start space-x-3 max-w-xs lg:max-w-2xl">
        <div className="w-9 h-9 bg-gradient-to-br from-bn-primary to-bn-accent rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden shadow-md">
          <img 
            src="/lovable-uploads/6d11c80a-4ac4-4bc6-9e77-bb935fd74a5a.png" 
            alt="LuzIA" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-md">
          <p className="text-sm text-gray-800 leading-relaxed">{message.content}</p>
          <p className="text-xs text-gray-500 mt-2">
            {formatDistanceToNow(message.timestamp, { addSuffix: true, locale: ptBR })}
          </p>
          <MessageActions
            messageId={message.id}
            messageContent={message.content}
            references={message.references}
            feedback={message.feedback}
            onFeedback={onFeedback}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
