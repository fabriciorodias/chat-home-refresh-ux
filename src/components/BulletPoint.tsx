
import { ReactNode } from "react";

interface BulletPointProps {
  children: ReactNode;
  icon?: ReactNode;
}

const BulletPoint = ({ children, icon }: BulletPointProps) => {
  return (
    <li className="flex items-start">
      <span className="flex-shrink-0 w-1 h-1 bg-bn-primary rounded-full mt-1.5 mr-2.5" />
      <span className="text-gray-600 text-sm">
        {children}
      </span>
    </li>
  );
};

export default BulletPoint;
