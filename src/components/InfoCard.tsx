
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
      className="group bg-white rounded-2xl shadow-lg border border-gray-100/50 p-6 hover:shadow-xl hover:border-bn-primary/20 transition-all duration-500 animate-fade-in backdrop-blur-sm relative overflow-hidden"
      style={{ animationDelay: delay }}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-bn-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header with icon and title */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-bn-primary via-bn-accent to-bn-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div className="text-white scale-110">
              {icon}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-bn-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-bn-primary to-bn-accent rounded-full mt-2 group-hover:w-20 transition-all duration-500" />
          </div>
        </div>

        {/* Content */}
        <div className="text-gray-700 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
