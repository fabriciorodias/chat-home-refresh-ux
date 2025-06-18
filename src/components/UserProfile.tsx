
const UserProfile = () => {
  return (
    <div className="bg-white border-t border-gray-200 p-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-bn-primary to-bn-accent rounded-full flex items-center justify-center text-white font-bold shadow-md">
          FR
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-800">FABRÍCIO Rocha de Oliveira Dias</p>
          <p className="text-sm text-gray-600">F121690</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
