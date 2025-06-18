
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSend = () => {
    if (message.trim() && agreed) {
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

  const handleAgreementChange = (checked: boolean | "indeterminate") => {
    setAgreed(checked === true);
  };

  const handlePromptClick = (prompt: string) => {
    setMessage(prompt);
  };

  const promptSuggestions = [
    "Quais são os requisitos para aprovar um financiamento FNE para pessoa física?",
    "Como devo proceder para análise de crédito de uma empresa do setor industrial?"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
      <div className="space-y-4 lg:space-y-6">
        {/* Prompt Suggestions */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 text-sm">Exemplos de prompts:</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {promptSuggestions.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptClick(prompt)}
                className="bg-gray-50 hover:bg-gray-100 rounded-xl p-3 border border-gray-100 transition-colors text-left"
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
        <div className="space-y-4">
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
              disabled={!message.trim() || !agreed}
              className="h-12 px-6 bg-gradient-to-r from-bn-primary to-bn-accent hover:from-bn-secondary hover:to-bn-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg transition-all duration-200"
            >
              <Send size={20} />
            </Button>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={handleAgreementChange}
              className="mt-1 data-[state=checked]:bg-bn-primary data-[state=checked]:border-bn-primary"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
              Li e concordo com os termos do{" "}
              <a href="#" className="text-bn-primary hover:text-bn-secondary font-medium underline">
                Termo de Confidencialidade
              </a>
            </label>
          </div>

          <Button
            disabled={!agreed}
            className="w-full h-12 bg-gradient-to-r from-bn-primary to-bn-accent hover:from-bn-secondary hover:to-bn-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg transition-all duration-200 font-medium"
          >
            Ir para LuzIA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
