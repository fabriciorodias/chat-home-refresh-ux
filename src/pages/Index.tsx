
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import InfoCard from "@/components/InfoCard";
import BulletPoint from "@/components/BulletPoint";
import ChatInterface from "@/components/ChatInterface";
import UserProfile from "@/components/UserProfile";
import { HelpCircle, Settings, Video, BookOpen, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

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
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-bn-primary via-bn-accent to-bn-secondary bg-clip-text text-transparent">
                Bem-vindo à LuzIA
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sua assistente inteligente para orientações sobre normas de concessão de crédito do Banco do Nordeste
              </p>
            </div>

            {/* Information Cards */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <InfoCard 
                icon={<HelpCircle size={24} />}
                title="Quem sou?"
                delay="100ms"
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-bn-primary/10 to-bn-accent/10 rounded-xl p-4 border-l-4 border-bn-primary">
                    <p className="font-medium text-gray-800 flex items-center">
                      <Sparkles className="w-5 h-5 text-bn-primary mr-2" />
                      Olá! Sou a LuzIA, sua assistente virtual especializada
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Especialista em normas de concessão de crédito
                    </p>
                    <p className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Posso te orientar, mas não tomo decisões finais
                    </p>
                    <p className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Até 10 perguntas por sessão de chat
                    </p>
                    <p className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Cada chat é independente - seja claro e objetivo
                    </p>
                  </div>

                  <div className="bg-bn-primary/5 rounded-xl p-4 text-center">
                    <p className="font-medium text-bn-primary flex items-center justify-center">
                      Conte comigo para suas dúvidas! <span className="ml-2 text-xl">😊</span>
                    </p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<Settings size={24} />}
                title="Como funciona?"
                delay="200ms"
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                    <p className="font-semibold text-gray-800 mb-3 flex items-center">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                      Veja como posso te ajudar:
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    <BulletPoint>
                      <span className="font-medium">Envie sua dúvida</span> em linguagem clara e objetiva
                    </BulletPoint>
                    <BulletPoint>
                      Respondo <span className="font-medium text-bn-primary">apenas sobre concessão de crédito</span>
                    </BulletPoint>
                    <BulletPoint>
                      Baseio minhas respostas nos <span className="font-medium">normativos oficiais</span> do banco
                    </BulletPoint>
                    <BulletPoint>
                      Você pode <span className="font-medium">aprofundar com novas perguntas</span> no mesmo chat
                    </BulletPoint>
                    <BulletPoint>
                      <span className="font-medium text-bn-accent">Mudou o assunto?</span> Inicie um novo chat comigo
                    </BulletPoint>
                  </ul>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<Video size={24} />}
                title="Vídeo de orientação"
                delay="300ms"
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                    <p className="text-gray-800">
                      Assista ao vídeo e aprenda como <span className="font-semibold text-purple-700">interagir comigo da melhor forma!</span>
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-700 mb-3">🎥 Você verá:</p>
                    <ul className="space-y-2">
                      <BulletPoint>
                        Como fazer <span className="font-medium">perguntas eficientes</span>
                      </BulletPoint>
                      <BulletPoint>
                        O que esperar das <span className="font-medium">minhas respostas</span>
                      </BulletPoint>
                      <BulletPoint>
                        <span className="font-medium text-bn-primary">Dicas rápidas</span> para aproveitar melhor o atendimento
                      </BulletPoint>
                    </ul>
                  </div>

                  <div className="mt-4 p-3 bg-gradient-to-r from-bn-primary/10 to-bn-accent/10 rounded-lg border border-bn-primary/20">
                    <p className="text-sm text-gray-700 text-center font-medium">
                      💡 Dica: Assista antes de começar para ter a melhor experiência
                    </p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<BookOpen size={24} />}
                title="Dicas para perguntar bem"
                delay="400ms"
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                    <p className="font-semibold text-gray-800 flex items-center">
                      <BookOpen className="w-5 h-5 text-green-600 mr-2" />
                      Para ter respostas mais assertivas:
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    <BulletPoint>
                      Seja <span className="font-semibold text-bn-primary">específico</span> (produto, porte, finalidade)
                    </BulletPoint>
                    <BulletPoint>
                      <span className="font-medium">Dê contexto:</span> 
                      <span className="italic text-gray-600 block mt-1 ml-2">
                        "Como posso financiar um FNE SOL para uma Pessoa Física?"
                      </span>
                    </BulletPoint>
                    <BulletPoint>
                      Inclua o <span className="font-medium">número da norma</span>, se souber - isso me ajuda muito!
                    </BulletPoint>
                    <BulletPoint>
                      <span className="font-medium text-red-600">Evite</span> perguntas genéricas ou muito amplas
                    </BulletPoint>
                  </ul>

                  <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <p className="text-sm font-medium text-gray-700 flex items-center">
                      <Sparkles className="w-4 h-4 text-amber-600 mr-2" />
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
