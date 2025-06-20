
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import UserProfile from "@/components/UserProfile";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlePromptClick = (prompt: string) => {
    setMessage(prompt);
  };

  const promptSuggestions = [
    "Quais são os requisitos para aprovar um financiamento FNE para pessoa física?",
    "Como devo proceder para análise de crédito de uma empresa do setor industrial?",
    "Qual o limite de crédito para microempresas no programa FNE?",
    "Como avaliar a capacidade de pagamento de um cliente pessoa jurídica?"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="flex flex-col">
        <Sidebar />
        <UserProfile />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <ChatHeader />
        
        <div className="flex-1 p-4 lg:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Welcome Message */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Olá! Eu sou a LuzIA 👋</h2>
                <p className="text-gray-600">Sua assistente virtual para dúvidas sobre normas de concessão de crédito</p>
              </div>
            </div>

            {/* Prompt Suggestions */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exemplos de prompts:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {promptSuggestions.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handlePromptClick(prompt)}
                    className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 border border-gray-100 transition-colors text-left"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-bn-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-bn-primary text-xs">💡</span>
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm leading-relaxed">{prompt}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="flex space-x-3">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua pergunta aqui..."
                  className="flex-1 h-12 px-4 border-2 border-gray-200 focus:border-bn-primary rounded-xl transition-colors"
                />
                <Button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="h-12 px-6 bg-gradient-to-r from-bn-primary to-bn-accent hover:from-bn-secondary hover:to-bn-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg transition-all duration-200"
                >
                  <Send size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
