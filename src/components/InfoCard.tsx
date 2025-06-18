
import { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  delay?: string;
}

const InfoCard = ({ icon, title, children, delay = "0ms" }: InfoCardProps) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-bn-primary to-bn-accent rounded-xl flex items-center justify-center shadow-md">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
            {title}
          </h3>
          <div className="text-gray-600 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
