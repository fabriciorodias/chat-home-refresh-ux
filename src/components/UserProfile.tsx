

const UserProfile = () => {
  return (
    <div className="bg-white border-t border-gray-200 p-6 w-64">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-bn-primary to-bn-accent rounded-full flex items-center justify-center text-white font-bold shadow-md flex-shrink-0">
          FR
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-800 truncate text-sm">FABRÍCIO Rocha de Oliveira Dias</p>
          <p className="text-xs text-gray-600 truncate">F121690</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

