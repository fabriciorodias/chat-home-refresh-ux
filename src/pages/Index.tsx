
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import InfoCard from "@/components/InfoCard";
import ChatInterface from "@/components/ChatInterface";
import UserProfile from "@/components/UserProfile";
import { HelpCircle, Settings } from "lucide-react";

const Index = () => {
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
        
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Information Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              <InfoCard 
                icon={<HelpCircle className="text-white" size={24} />}
                title="Quem é a LuzIA?"
                delay="200ms"
              >
                <div className="space-y-4">
                  <p>
                    Olá! Sou a LuzIA, sua assistente virtual para dúvidas sobre normas de concessão de crédito.
                  </p>
                  <p>
                    Estou aqui para orientar, mas não tomo decisões. Você pode fazer até 10 perguntas por chat. Após isso, é só iniciar um novo.
                  </p>
                  <p>
                    Cada chat é independente, então seja claro e específico nas suas perguntas para agilizar o atendimento.
                  </p>
                  <p className="flex items-center">
                    Conte comigo! <span className="ml-2">😊</span>
                  </p>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<Settings className="text-white" size={24} />}
                title="Como utilizar?"
                delay="400ms"
              >
                <div className="space-y-3">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Faça perguntas claras e objetivas.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Seja específico: cite o produto, cliente ou situação.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Use termos normativos conhecidos.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Informe o contexto e as exceções.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Evite perguntas amplas ou subjetivas.</span>
                    </li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                    <p className="text-blue-800 text-sm flex items-center">
                      <span className="mr-2">📋</span>
                      <strong>Mudou de assunto? Inicie um novo chat!</strong>
                    </p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-800 text-sm">
                      <strong>⚠️</strong> Respondo apenas perguntas relacionadas à concessão de crédito.
                    </p>
                  </div>
                </div>
              </InfoCard>
            </div>

            {/* Chat Interface */}
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
