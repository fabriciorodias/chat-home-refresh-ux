
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ChatInterface = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleAgreementChange = (checked: boolean | "indeterminate") => {
    setAgreed(checked === true);
  };

  const handleGoToLuzia = () => {
    if (agreed) {
      navigate("/chat");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
      <div className="space-y-4 lg:space-y-6">
        {/* Terms Agreement */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Pronto para começar?</h3>
          <p className="text-gray-600">Para acessar a LuzIA, você precisa concordar com nossos termos.</p>
        </div>

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
          onClick={handleGoToLuzia}
          disabled={!agreed}
          className="w-full h-12 bg-gradient-to-r from-bn-primary to-bn-accent hover:from-bn-secondary hover:to-bn-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg transition-all duration-200 font-medium"
        >
          Ir para LuzIA
        </Button>
      </div>
    </div>
  );
};

export default ChatInterface;
