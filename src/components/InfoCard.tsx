
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
      className="bg-white rounded-xl shadow-md border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-bn-primary to-bn-accent rounded-lg flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
            {title}
          </h3>
          <div className="text-gray-600 leading-relaxed text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
