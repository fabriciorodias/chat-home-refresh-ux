
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import InfoCard from "@/components/InfoCard";
import ChatInterface from "@/components/ChatInterface";
import UserProfile from "@/components/UserProfile";
import { HelpCircle, Settings, Video, BookOpen } from "lucide-react";

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
                title="Quem sou?"
                delay="200ms"
              >
                <div className="space-y-4">
                  <p>
                    Olá! Sou a LuzIA, sua assistente virtual para dúvidas sobre normas de concessão de crédito.
                  </p>
                  <p>
                    Posso te orientar, mas não tomo decisões.
                  </p>
                  <p>
                    Você pode me fazer até 10 perguntas por chat.
                  </p>
                  <p>
                    Cada chat é independente, por isso seja claro e objetivo ao perguntar.
                  </p>
                  <p className="flex items-center">
                    Conte comigo! <span className="ml-2">😊</span>
                  </p>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<Settings className="text-white" size={24} />}
                title="Como funciona?"
                delay="400ms"
              >
                <div className="space-y-3">
                  <p className="font-medium text-gray-700">Veja como posso te ajudar:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Envie sua dúvida em linguagem clara e objetiva</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Respondo apenas sobre concessão de crédito</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Baseio minhas respostas nos normativos do banco</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Você pode aprofundar com novas perguntas no mesmo chat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Mudou o assunto? Inicie um novo chat comigo.</span>
                    </li>
                  </ul>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<Video className="text-white" size={24} />}
                title="Vídeo de orientação"
                delay="600ms"
              >
                <div className="space-y-3">
                  <p>
                    Assista ao vídeo ao lado e aprenda como interagir comigo da melhor forma!
                  </p>
                  <p className="font-medium text-gray-700">Você verá:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Como fazer perguntas eficientes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>O que esperar das minhas respostas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Dicas rápidas para aproveitar melhor o atendimento</span>
                    </li>
                  </ul>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<BookOpen className="text-white" size={24} />}
                title="Dicas para perguntar bem"
                delay="800ms"
              >
                <div className="space-y-3">
                  <p className="font-medium text-gray-700">Para ter respostas mais assertivas:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Seja específico (produto, porte, finalidade)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Dê contexto: "Como posso financiar um FNE SOL para uma Pessoa Física"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Inclua o número da norma, se souber, isso me ajuda a entender melhor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bn-primary mr-2">•</span>
                      <span>Evite perguntas genéricas ou muito amplas</span>
                    </li>
                  </ul>
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
