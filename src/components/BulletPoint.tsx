
import { ReactNode } from "react";

interface BulletPointProps {
  children: ReactNode;
  icon?: ReactNode;
}

const BulletPoint = ({ children, icon }: BulletPointProps) => {
  return (
    <li className="flex items-start">
      <span className="flex-shrink-0 w-1.5 h-1.5 bg-bn-primary rounded-full mt-2 mr-3" />
      <span className="text-gray-600">
        {children}
      </span>
    </li>
  );
};

export default BulletPoint;
