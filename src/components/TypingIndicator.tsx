
const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-end space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-bn-primary to-bn-accent rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img 
            src="/lovable-uploads/6d11c80a-4ac4-4bc6-9e77-bb935fd74a5a.png" 
            alt="LuzIA" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-md">
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-600">LuzIA está digitando</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
