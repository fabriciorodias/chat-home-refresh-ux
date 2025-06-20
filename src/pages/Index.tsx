
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import InfoCard from "@/components/InfoCard";
import BulletPoint from "@/components/BulletPoint";
import ChatInterface from "@/components/ChatInterface";
import UserProfile from "@/components/UserProfile";
import { HelpCircle, Settings, Video, BookOpen, Sparkles, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex overflow-hidden">
      {/* Sidebar Container - Full Height */}
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <Sidebar />
        </div>
        <UserProfile />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-auto">
        <ChatHeader />
        
        <div className="flex-1 p-6 lg:p-8 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="text-center space-y-3 mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Bem-vindo à LuzIA
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sua assistente inteligente para orientações sobre normas de concessão de crédito do Banco do Nordeste
              </p>
            </div>

            {/* Information Cards */}
            <div className="grid lg:grid-cols-2 gap-6">
              <InfoCard 
                icon={<HelpCircle size={20} />}
                title="Quem sou?"
                delay="100ms"
              >
                <div className="space-y-4">
                  <p className="font-medium text-gray-700">
                    Olá! Sou a LuzIA, sua assistente virtual especializada em normas de concessão de crédito.
                  </p>
                  
                  <ul className="space-y-2">
                    <BulletPoint>
                      Especialista em normas de concessão de crédito
                    </BulletPoint>
                    <BulletPoint>
                      Posso te orientar, mas não tomo decisões finais
                    </BulletPoint>
                    <BulletPoint>
                      Até 10 perguntas por sessão de chat
                    </BulletPoint>
                    <BulletPoint>
                      Cada chat é independente - seja claro e objetivo
                    </BulletPoint>
                  </ul>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<Settings size={20} />}
                title="Como funciona?"
                delay="200ms"
              >
                <div className="space-y-4">
                  <p className="font-medium text-gray-700">
                    Veja como posso te ajudar:
                  </p>
                  
                  <ul className="space-y-2">
                    <BulletPoint>
                      Envie sua dúvida em linguagem clara e objetiva
                    </BulletPoint>
                    <BulletPoint>
                      Respondo apenas sobre concessão de crédito
                    </BulletPoint>
                    <BulletPoint>
                      Baseio minhas respostas nos normativos oficiais do banco
                    </BulletPoint>
                    <BulletPoint>
                      Você pode aprofundar com novas perguntas no mesmo chat
                    </BulletPoint>
                    <BulletPoint>
                      Mudou o assunto? Inicie um novo chat comigo
                    </BulletPoint>
                  </ul>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<Video size={20} />}
                title="Vídeo de orientação"
                delay="300ms"
              >
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Assista ao vídeo e aprenda como interagir comigo da melhor forma!
                  </p>
                  
                  <div className="space-y-2">
                    <p className="font-medium text-gray-700">🎥 Você verá:</p>
                    <ul className="space-y-2">
                      <BulletPoint>
                        Como fazer perguntas eficientes
                      </BulletPoint>
                      <BulletPoint>
                        O que esperar das minhas respostas
                      </BulletPoint>
                      <BulletPoint>
                        Dicas para aproveitar melhor o atendimento
                      </BulletPoint>
                    </ul>
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      💡 Assista antes de começar para ter a melhor experiência
                    </p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<BookOpen size={20} />}
                title="Dicas para perguntar bem"
                delay="400ms"
              >
                <div className="space-y-4">
                  <p className="font-medium text-gray-700">
                    Para ter respostas mais assertivas:
                  </p>
                  
                  <ul className="space-y-2">
                    <BulletPoint>
                      Seja específico (produto, porte, finalidade)
                    </BulletPoint>
                    <BulletPoint>
                      Dê contexto: "Como posso financiar um FNE SOL para uma Pessoa Física?"
                    </BulletPoint>
                    <BulletPoint>
                      Inclua o número da norma, se souber
                    </BulletPoint>
                    <BulletPoint>
                      Evite perguntas genéricas ou muito amplas
                    </BulletPoint>
                  </ul>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      <Sparkles className="w-4 h-4 inline mr-1" />
                      Quanto mais detalhes, melhor posso te ajudar!
                    </p>
                  </div>
                </div>
              </InfoCard>
            </div>

            {/* Chat Interface */}
            <div className="mt-8">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
