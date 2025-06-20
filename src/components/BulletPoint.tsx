
import { ReactNode } from "react";

interface BulletPointProps {
  children: ReactNode;
  icon?: ReactNode;
}

const BulletPoint = ({ children, icon }: BulletPointProps) => {
  return (
    <li className="flex items-start group">
      <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-bn-primary to-bn-accent rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform duration-300" />
      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-200">
        {children}
      </span>
    </li>
  );
};

export default BulletPoint;
