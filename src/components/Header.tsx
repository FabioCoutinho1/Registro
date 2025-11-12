import { Plus } from "lucide-react";

interface HeaderProps {
  onNewClick: () => void;
}

const Header = ({ onNewClick }: HeaderProps) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white border-b
     border-gray-200 shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-gray-900">BrandFlow</h1>
          <button
            onClick={onNewClick}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg
             hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
          >
            <Plus className="w-5 h-5" />
            Novo Registro
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
