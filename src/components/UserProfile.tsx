
const UserProfile = () => {
  return (
    <div className="bg-[#D32F2F] border-t border-white/20 p-6 w-64">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#D32F2F] font-bold shadow-md flex-shrink-0">
          FR
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white truncate text-sm">FABRÍCIO Rocha de Oliveira Dias</p>
          <p className="text-xs text-white/80 truncate">F121690</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
