
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
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-bn-primary/10 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      {/* Header with icon and title */}
      <div className="flex items-center space-x-3 mb-5">
        <div className="flex-shrink-0 w-10 h-10 bg-bn-primary/10 rounded-lg flex items-center justify-center">
          <div className="text-bn-primary">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
