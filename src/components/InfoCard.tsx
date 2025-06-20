
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
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md hover:border-bn-primary/20 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      {/* Header with icon and title */}
      <div className="flex items-center space-x-2.5 mb-3">
        <div className="flex-shrink-0 w-8 h-8 bg-bn-primary/10 rounded-lg flex items-center justify-center">
          <div className="text-bn-primary">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-800">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
